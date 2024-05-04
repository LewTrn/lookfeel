"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { extractBaseColours } from "~/utils/colours/extractBaseColours";

import { Header } from "./_components/header/Header";
import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";
import { useGenerateStore } from "./_store/useGenerateStore";

export default function Generate() {
  const searchParams = useSearchParams();
  const generatePalette = useGenerateStore((state) => state.generatePalette);

  useEffect(() => {
    const baseColours = extractBaseColours(searchParams.get("colors"));
    if (baseColours) {
      generatePalette(baseColours);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- initialise palette from params
  }, []);

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
