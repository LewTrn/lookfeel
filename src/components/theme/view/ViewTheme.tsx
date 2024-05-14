import { type ComponentProps } from "react";

import { type Theme } from "~/types/Theme";

import { ThemeDetails } from "./details/ThemeDetails";
import { ThemeDetailsTabs } from "./details/ThemeDetailsTabs";
import { ThemeVisuals } from "./visuals/ThemeVisuals";

type ViewThemeTabsProps = {
  showTabs: true;
  tabsProps: Omit<ComponentProps<typeof ThemeDetailsTabs>, "theme">;
};

type ViewThemeProps = {
  theme: Theme;
} & (ViewThemeTabsProps | { showTabs?: false });

export const ViewTheme = ({ theme, ...props }: ViewThemeProps) => {
  return (
    <div className="flex gap-8 px-8 pb-8">
      <div className="w-80">
        {props.showTabs ? (
          <ThemeDetailsTabs theme={theme} {...props.tabsProps} />
        ) : (
          <ThemeDetails theme={theme} />
        )}
      </div>
      <div className="w-full">
        <ThemeVisuals theme={theme} />
      </div>
    </div>
  );
};
