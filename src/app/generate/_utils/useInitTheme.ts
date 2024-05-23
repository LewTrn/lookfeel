import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { extractBaseColours } from "~/utils/colours/extractBaseColours";
import { extractFonts } from "~/utils/typography/extractFonts";

import { useGenerateStore } from "../_store/useGenerateStore";
import { useThemeParams } from "./params/useThemeParams";

export const useInitTheme = () => {
  const themeLoaded = useRef(false);
  const searchParams = useSearchParams();
  const setThemeParams = useThemeParams();

  const updateHistory = useGenerateStore((state) => state.updateHistory);
  const generatePalette = useGenerateStore((state) => state.generatePalette);
  const generateFonts = useGenerateStore((state) => state.generateFonts);
  const toggleLock = useGenerateStore((state) => state.toggleLock);

  useEffect(() => {
    if (!themeLoaded.current) {
      const baseColours = extractBaseColours(searchParams.get("colors"));
      const palette = generatePalette(baseColours ?? undefined);

      const fonts = extractFonts(searchParams.get("fonts"));
      const generatedFonts = generateFonts(fonts ?? undefined);

      setThemeParams({ palette, fonts: generatedFonts });
      themeLoaded.current = true;
      updateHistory("reset");
      toggleLock(null);
    }
  }, [
    generateFonts,
    generatePalette,
    searchParams,
    setThemeParams,
    toggleLock,
    updateHistory,
  ]);

  return { isThemeLoaded: themeLoaded.current };
};
