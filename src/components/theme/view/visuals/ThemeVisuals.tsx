"use client";

import {
  DownloadIcon,
  Grid2X2Icon,
  LayoutPanelTopIcon,
  SwatchBookIcon,
} from "lucide-react";
import { Landing } from "templates/components/landing/Landing";
import { Shades } from "templates/components/shades/Shades";
import { StyleTile } from "templates/components/style-tile/StyleTile";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/lookfeel";
import { type Theme } from "~/types/Theme";

type ThemeVisualsProps = {
  theme: Theme;
};

export const ThemeVisuals = ({ theme }: ThemeVisualsProps) => {
  return (
    <div className="w-full">
      <Tabs defaultValue="tile">
        <TabsList className="mb-6">
          <TabsTrigger value="tile" Icon={Grid2X2Icon}>
            {strings.visuals.tabs.styleTile.action}
          </TabsTrigger>
          <TabsTrigger value="landing" Icon={LayoutPanelTopIcon}>
            {strings.visuals.tabs.landing.action}
          </TabsTrigger>
          <TabsTrigger value="shades" Icon={SwatchBookIcon}>
            {strings.visuals.tabs.shades.action}
          </TabsTrigger>
          <TabsTrigger value="export" Icon={DownloadIcon} disabled>
            {strings.visuals.tabs.export.action}
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
