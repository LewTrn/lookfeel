"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { extractBaseColours } from "~/utils/colours/extractBaseColours";

import { Header } from "./_components/header/Header";
import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";
import { useGenerateStore } from "./_store/useGenerateStore";
import { usePaletteParams } from "./_utils/params/usePaletteParams";

export default function Generate() {
  const searchParams = useSearchParams();
  const setPaletteParams = usePaletteParams();

  const paletteLoaded = useGenerateStore((state) => state.paletteLoaded);
  const generatePalette = useGenerateStore((state) => state.generatePalette);

  useEffect(() => {
    const baseColours = extractBaseColours(searchParams.get("colors"));
    const palette = generatePalette(baseColours ?? undefined);

    if (!baseColours) setPaletteParams(palette);

    // eslint-disable-next-line react-hooks/exhaustive-deps -- initialise palette from params
  }, []);

  if (!paletteLoaded) return null;

  return (
    <main className="flex w-full flex-col">
      <Header />
      <div className="flex gap-8 px-8">
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
