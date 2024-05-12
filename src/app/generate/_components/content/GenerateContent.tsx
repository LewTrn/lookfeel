"use client";

import { useLoadFont } from "~/utils/typography/useLoadFont";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { useInitTheme } from "../../_utils/useInitTheme";
import { Options } from "../options/Options";
import { Visualise } from "../visualise/Visualise";

export const GenerateContent = () => {
  const { heading, body } = useGenerateStore((state) => state.fonts);

  useLoadFont(heading);
  useLoadFont(body);

  const { isThemeLoaded } = useInitTheme();

  if (!isThemeLoaded) return null;
  return (
    <div className="flex gap-8 px-8 pb-8">
      <div className="w-80">
        <Options />
      </div>
      <div className="w-full">
        <Visualise />
      </div>
    </div>
  );
};
