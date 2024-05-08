import { useQuery } from "@tanstack/react-query";

const getFont = async (font: string) => {
  await import("webfontloader").then((WebFontLoader) => {
    WebFontLoader.load({
      google: { families: [font] },
    });
  });

  return font;
};

export const useLoadFont = (font: string) => {
  return useQuery({
    queryKey: ["loadFont", font],
    queryFn: () => getFont(font),
  });
};
