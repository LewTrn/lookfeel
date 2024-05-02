import {
  Grid2X2Icon,
  LayoutPanelTopIcon,
  LineChartIcon,
  SwatchBookIcon,
} from "lucide-react";

import { Landing } from "~/components/templates/landing/Landing";
import { Shades } from "~/components/templates/shades/Shades";
import { StyleTile } from "~/components/templates/style-tile/StyleTile";
import { ThemeProvider } from "~/components/templates/theme/ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";

export const Visualise = () => {
  const palette = useGenerateStore((state) => state.palette);

  return (
    <div className="w-full">
      <Tabs defaultValue="tile">
        <TabsList className="mb-6">
          <TabsTrigger value="tile" Icon={Grid2X2Icon}>
            {strings.visualise.tabs.styleTile.action}
          </TabsTrigger>
          <TabsTrigger value="shades" Icon={SwatchBookIcon}>
            {strings.visualise.tabs.shades.action}
          </TabsTrigger>
          <TabsTrigger value="landing" Icon={LayoutPanelTopIcon}>
            {strings.visualise.tabs.landing.action}
          </TabsTrigger>
          <TabsTrigger value="dashboard" Icon={LineChartIcon}>
            {strings.visualise.tabs.dashboard.action}
          </TabsTrigger>
        </TabsList>
        <ThemeProvider theme={{ palette }}>
          <TabsContent value="tile">
            <StyleTile />
          </TabsContent>
          <TabsContent value="shades">
            <Shades />
          </TabsContent>
          <TabsContent value="landing">
            <Landing />
          </TabsContent>
        </ThemeProvider>
      </Tabs>
    </div>
  );
};
