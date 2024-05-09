"use client";

import { useLoadFont } from "~/utils/typography/useLoadFont";

import { Header } from "./_components/header/Header";
import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";
import { useGenerateStore } from "./_store/useGenerateStore";
import { useInitTheme } from "./_utils/useInitTheme";

export default function Generate() {
  const { heading, body } = useGenerateStore((state) => state.fonts);

  useLoadFont(heading);
  useLoadFont(body);

  const { isThemeLoaded } = useInitTheme();

  if (!isThemeLoaded) return null;

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
