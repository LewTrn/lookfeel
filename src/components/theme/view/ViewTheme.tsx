import { type ComponentProps } from "react";

import { type Theme } from "~/types/Theme";

import { ThemeDetails } from "./details/ThemeDetails";
import { ThemeVisuals } from "./visuals/ThemeVisuals";

type ViewThemeProps = {
  theme: Theme;
  detailsProps?: Omit<ComponentProps<typeof ThemeDetails>, "theme">;
};

export const ViewTheme = ({ theme, detailsProps }: ViewThemeProps) => {
  return (
    <div className="flex gap-8 px-8 pb-8">
      <div className="w-80">
        <ThemeDetails theme={theme} {...detailsProps} />
      </div>
      <div className="w-full">
        <ThemeVisuals theme={theme} />
      </div>
    </div>
  );
};
