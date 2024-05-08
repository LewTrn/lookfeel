import { Grid2X2Icon, LayoutPanelTopIcon, SwatchBookIcon } from "lucide-react";
import { Landing } from "templates/components/landing/Landing";
import { Shades } from "templates/components/shades/Shades";
import { StyleTile } from "templates/components/style-tile/StyleTile";

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
          <TabsTrigger value="landing" Icon={LayoutPanelTopIcon}>
            {strings.visualise.tabs.landing.action}
          </TabsTrigger>
          <TabsTrigger value="shades" Icon={SwatchBookIcon}>
            {strings.visualise.tabs.shades.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tile">
          <StyleTile theme={{ palette }} />
        </TabsContent>
        <TabsContent value="landing">
          <Landing theme={{ palette }} />
        </TabsContent>
        <TabsContent value="shades">
          <Shades theme={{ palette }} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
