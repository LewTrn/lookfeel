"use client";

import { ViewTheme } from "~/components/theme/view/ViewTheme";
import { type GenerateMode } from "~/types/Mode";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { useInitTheme } from "../../_utils/useInitTheme";
import { ColourPickerRow } from "../colours/ColourPickerRow";

export const GenerateViewThemeContainer = () => {
  const palette = useGenerateStore((state) => state.palette);
  const fonts = useGenerateStore((state) => state.fonts);

  const mode = useGenerateStore((state) => state.mode);
  const setMode = useGenerateStore((state) => state.setMode);

  const { isThemeLoaded } = useInitTheme();

  if (!isThemeLoaded) return null;

  const theme = { palette, fonts };

  return (
    <ViewTheme
      theme={theme}
      tabsProps={{
        defaultValue: mode,
        onValueChange: (mode) => setMode(mode as GenerateMode),
      }}
      CustomColourRow={ColourPickerRow}
    />
  );
};
