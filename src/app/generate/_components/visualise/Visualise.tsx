"use client";

import { Shades } from "~/components/templates/shades/Shades";
import { StyleTile } from "~/components/templates/style-tile/StyleTile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";

export const Visualise = () => {
  const palette = useGenerateStore((state) => state.palette);
  const colours = palette ? Object.values(palette) : [];

  return (
    <div className="w-full">
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">
            {strings.visualise.tabs.all.action}
          </TabsTrigger>
          <TabsTrigger value="tile">
            {strings.visualise.tabs.styleTile.action}
          </TabsTrigger>
          <TabsTrigger value="shades">
            {strings.visualise.tabs.shades.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" />
        <TabsContent value="tile">
          <StyleTile />
        </TabsContent>
        <TabsContent value="shades">
          <Shades colours={colours} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
