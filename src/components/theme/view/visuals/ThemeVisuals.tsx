"use client";

import { Grid2X2Icon, LayoutPanelTopIcon, SwatchBookIcon } from "lucide-react";
import { Landing } from "templates/components/landing/Landing";
import { Shades } from "templates/components/shades/Shades";
import { StyleTile } from "templates/components/style-tile/StyleTile";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { strings } from "~/locales/lookfeel";
import { type Theme } from "~/types/Theme";

type ThemeVisualsProps = {
  theme: Theme;
  liftTabs?: boolean;
};

export const ThemeVisuals = ({ theme, liftTabs }: ThemeVisualsProps) => {
  return (
    <div className="w-full">
      <Tabs defaultValue="tile">
        <TabsList className={cn("mb-6", liftTabs && "fixed top-4 z-50 ")}>
          <TabsTrigger value="tile" Icon={Grid2X2Icon}>
            {strings.visuals.tabs.styleTile.action}
          </TabsTrigger>
          <TabsTrigger value="landing" Icon={LayoutPanelTopIcon}>
            {strings.visuals.tabs.landing.action}
          </TabsTrigger>
          <TabsTrigger value="shades" Icon={SwatchBookIcon}>
            {strings.visuals.tabs.shades.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tile">
          <StyleTile theme={theme} />
        </TabsContent>
        <TabsContent value="landing">
          <Landing theme={theme} />
        </TabsContent>
        <TabsContent value="shades">
          <Shades palette={theme.palette} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
