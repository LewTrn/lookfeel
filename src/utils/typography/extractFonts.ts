export const extractFonts = (fontsString: string | null) => {
  const fonts = fontsString?.split("-") ?? [];
  return fonts.length === 2 ? fonts : null;
};
