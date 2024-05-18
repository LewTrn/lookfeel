import { z } from "zod";

const paletteSchema = z.object({
  primary: z.string().min(1),
  secondary: z.string().min(1),
  accent: z.string().min(1),
  neutral: z.string().min(1),
});

const fontsSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
});

export const createThemeSchema = z.object({
  palette: paletteSchema,
  fonts: fontsSchema,
  tags: z.array(z.string()).min(1),
});

export const getThemeSchema = z.object({
  id: z.string().min(1),
});

export const getThemesSchema = z.object({
  filter: z.enum(["latest", "trending"]),
});

export const likeThemeSchema = z.object({
  id: z.string().min(1),
  like: z.boolean(),
});
