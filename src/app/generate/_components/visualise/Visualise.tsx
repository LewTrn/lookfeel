"use client";

import { LayoutDashboardIcon, SwatchBookIcon } from "lucide-react";

import { Shades } from "~/components/templates/shades/Shades";
import { StyleTile } from "~/components/templates/style-tile/StyleTile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";

export const Visualise = () => {
  const palette = useGenerateStore((state) => state.palette);

  return (
    <div className="w-full">
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">
            {strings.visualise.tabs.all.action}
          </TabsTrigger>
          <TabsTrigger value="tile" Icon={LayoutDashboardIcon}>
            {strings.visualise.tabs.styleTile.action}
          </TabsTrigger>
          <TabsTrigger value="shades" Icon={SwatchBookIcon}>
            {strings.visualise.tabs.shades.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" />
        <TabsContent value="tile">
          <StyleTile />
        </TabsContent>
        <TabsContent value="shades">
          <Shades palette={palette!} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
