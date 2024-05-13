import e from "dbschema/edgeql-js";
import { nanoid } from "nanoid";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { createThemeSchema } from "../schemas/theme";

export const themeRouter = createTRPCRouter({
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
