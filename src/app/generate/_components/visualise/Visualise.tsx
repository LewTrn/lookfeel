import { LayoutDashboardIcon, SwatchBookIcon } from "lucide-react";

import { Shades } from "~/components/templates/shades/Shades";
import { StyleTile } from "~/components/templates/style-tile/StyleTile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";

export const Visualise = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="tile">
        <TabsList className="mb-6">
          <TabsTrigger value="tile" Icon={LayoutDashboardIcon}>
            {strings.visualise.tabs.styleTile.action}
          </TabsTrigger>
          <TabsTrigger value="shades" Icon={SwatchBookIcon}>
            {strings.visualise.tabs.shades.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tile">
          <StyleTile />
        </TabsContent>
        <TabsContent value="shades">
          <Shades />
        </TabsContent>
      </Tabs>
    </div>
  );
};
