"use client";

import { useEffect } from "react";

import { Header } from "./_components/header/Header";
import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";
import { useGenerateStore } from "./_store/useGenerateStore";

export default function Generate() {
  const generatePalette = useGenerateStore((state) => state.generatePalette);

  useEffect(() => {
    generatePalette();
  }, [generatePalette]);

  return (
    <main className="flex w-full flex-col px-8">
      <Header />
      <div className="flex gap-8">
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
