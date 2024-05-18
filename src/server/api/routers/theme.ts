import e from "dbschema/edgeql-js";
import { nanoid } from "nanoid";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import {
  createThemeSchema,
  getThemeSchema,
  getThemesSchema,
  likeThemeSchema,
} from "../schemas/theme";

const baseThemeQuery = {
  short_id: true,
  palette: {
    primary: true,
    secondary: true,
    accent: true,
    neutral: true,
  },
  fonts: {
    heading: true,
    body: true,
  },
  tags: {
    name: true,
  },
  likes: (likes) => ({
    filter_single: e.op(likes.user, "=", e.global.current_user),
  }),
  like_count: true,
};

export const themeRouter = createTRPCRouter({
  getTheme: publicProcedure
    .input(getThemeSchema)
    .query(async ({ input, ctx }) => {
      const query = e.select(e.Theme, (theme) => ({
        ...baseThemeQuery,
        likes: (likes) => ({
          filter_single: e.op(likes.user, "=", e.global.current_user),
        }),
        filter_single: e.op(theme.short_id, "=", input.id),
      }));

      const result = await query.run(ctx.session.client);

      if (!result) return null;

      return {
        id: result.short_id,
        palette: result.palette,
        fonts: result.fonts,
        like_count: result.like_count,
        liked: result.likes.length > 0,
        tags: result.tags.map((tag) => tag.name),
      };
    }),

  getThemes: publicProcedure
    .input(getThemesSchema)
    .query(async ({ input, ctx }) => {
      let query;

      switch (input.filter) {
        case "latest":
          query = e.select(e.Theme, (theme) => ({
            ...baseThemeQuery,
            limit: e.int64(24),
            order_by: {
              expression: theme.created_at,
              direction: e.DESC,
            },
          }));
          break;
        case "trending":
          query = e.select(e.Theme, (theme) => ({
            ...baseThemeQuery,
            limit: e.int64(24),
            order_by: {
              expression: theme.like_count,
              direction: e.DESC,
            },
          }));
          break;
        case "liked":
          query = e.select(e.Theme, (theme) => ({
            ...baseThemeQuery,
            limit: e.int64(60),
            filter: e.op(theme.likes.user, "=", e.global.current_user),
            order_by: {
              expression: theme.created_at,
              direction: e.DESC,
            },
          }));
          break;
        case "created":
          query = e.select(e.Theme, (theme) => ({
            ...baseThemeQuery,
            limit: e.int64(60),
            filter: e.op(theme.created_by, "=", e.global.current_user),
            order_by: {
              expression: theme.created_at,
              direction: e.DESC,
            },
          }));
          break;
      }

      const result = await query.run(ctx.session.client);

      return result.map((theme) => ({
        id: theme.short_id,
        palette: theme.palette,
        fonts: theme.fonts,
        like_count: theme.like_count,
        liked: theme.likes.length > 0,
        tags: theme.tags.map((tag) => tag.name),
      }));
    }),

  createTheme: publicProcedure
    .input(createThemeSchema)
    .mutation(async ({ input, ctx }) => {
      const short_id = nanoid(12);
      const query = e.insert(e.Theme, {
        short_id,
        palette: e.insert(e.Palette, input.palette),
        fonts: e.insert(e.Fonts, input.fonts),
        tags: e.select(e.Tags, (tags) => ({
          filter: e.op(tags.name, "in", e.set(...input.tags)),
        })),
      });

      await query.run(ctx.session.client);

      return { id: short_id, ...input };
    }),

  likeTheme: publicProcedure
    .input(likeThemeSchema)
    .mutation(async ({ input, ctx }) => {
      if (input.like) {
        const query = e.update(e.Theme, (theme) => ({
          set: {
            likes: {
              "+=": e.insert(e.Likes, {
                theme: e.select(e.Theme, (theme) => ({
                  filter_single: e.op(theme.short_id, "=", input.id),
                })),
              }),
            },
            like_count: e.op(theme.like_count, "+", 1),
          },
          filter_single: e.op(theme.short_id, "=", input.id),
        }));

        await query.run(ctx.session.client);
      } else {
        const selectQuery = e.select(e.Likes, (likes) => ({
          filter_single: e.op(
            e.op(likes.theme.short_id, "=", input.id),
            "and",
            e.op(likes.user, "=", e.global.current_user),
          ),
        }));

        const likeExists = await selectQuery.run(ctx.session.client);

        if (likeExists) {
          const query = e.update(e.Theme, (theme) => ({
            set: {
              likes: {
                "-=": e.delete(e.Likes, (likes) => ({
                  filter_single: e.op(likes.theme.short_id, "=", input.id),
                })),
              },
              like_count: e.op(theme.like_count, "-", 1),
            },
            filter_single: e.op(theme.short_id, "=", input.id),
          }));

          await query.run(ctx.session.client);
        }
      }
    }),
});
