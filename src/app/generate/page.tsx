"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { extractBaseColours } from "~/utils/colours/extractBaseColours";
import { useLoadFont } from "~/utils/typography/useLoadFont";

import { Header } from "./_components/header/Header";
import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";
import { useGenerateStore } from "./_store/useGenerateStore";
import { usePaletteParams } from "./_utils/params/usePaletteParams";

export default function Generate() {
  const paletteLoaded = useRef(false);
  const searchParams = useSearchParams();
  const setPaletteParams = usePaletteParams();

  const generatePalette = useGenerateStore((state) => state.generatePalette);
  const updateHistory = useGenerateStore((state) => state.updateHistory);
  const { heading, body } = useGenerateStore((state) => state.fonts);

  useLoadFont(heading.family);
  useLoadFont(body.family);

  // TODO: Add font to history and params
  useEffect(() => {
    if (!paletteLoaded.current) {
      updateHistory("clear");
      const baseColours = extractBaseColours(searchParams.get("colors"));
      const palette = generatePalette(baseColours ?? undefined);
      paletteLoaded.current = true;

      if (!baseColours) setPaletteParams(palette);
    }
  }, [generatePalette, searchParams, setPaletteParams, updateHistory]);

  if (!paletteLoaded) return null;

  return (
    <main className="flex w-full flex-col">
      <Header />
      <div className="flex gap-8 px-8 pb-8">
        <div className="w-80">
          <Options />
        </div>
        <div className="w-full">
          <Visualise />
        </div>
      </div>
    </main>
  );
}
