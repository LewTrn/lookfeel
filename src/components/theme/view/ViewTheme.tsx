import { type ComponentProps } from "react";

import { type Theme } from "~/types/Theme";

import { ThemeDetails } from "./details/ThemeDetails";
import { ThemeDetailsTabs } from "./details/ThemeDetailsTabs";
import { ThemeVisuals } from "./visuals/ThemeVisuals";

type ViewThemeProps = {
  theme: Theme;
  isView?: boolean;
  tabsProps?: Omit<ComponentProps<typeof ThemeDetailsTabs>, "theme">;
};

export const ViewTheme = ({ theme, isView, tabsProps }: ViewThemeProps) => {
  return (
    <div className="flex gap-8 px-8 pb-8">
      <div className="w-80">
        {!isView ? (
          <ThemeDetailsTabs theme={theme} {...tabsProps} />
        ) : (
          <ThemeDetails theme={theme} />
        )}
      </div>
      <div className="w-full">
        <ThemeVisuals theme={theme} liftTabs={isView} />
      </div>
    </div>
  );
};
