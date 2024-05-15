import e from "dbschema/edgeql-js";
import { nanoid } from "nanoid";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { createThemeSchema, getThemeSchema } from "../schemas/theme";

export const themeRouter = createTRPCRouter({
  getTheme: publicProcedure
    .input(getThemeSchema)
    .query(async ({ input, ctx }) => {
      const query = e.select(e.Theme, (theme) => ({
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
        like_count: e.count(theme.likes),
        filter_single: e.op(theme.short_id, "=", input.id),
      }));

      const result = await query.run(ctx.session.client);

      return result;
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

      return { short_id, ...input };
    }),
});
