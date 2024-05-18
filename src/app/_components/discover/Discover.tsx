"use client";

import { FlameIcon, SparklesIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/landing";

import { ThemeListing } from "./ThemeListing";

export const Discover = () => {
  return (
    <Tabs defaultValue="latest">
      <TabsList className="mb-6">
        <TabsTrigger value="latest" Icon={SparklesIcon}>
          {strings.discover.filter.latest.action}
        </TabsTrigger>
        <TabsTrigger value="trending" Icon={FlameIcon}>
          {strings.discover.filter.trending.action}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="latest">
        <ThemeListing filter="latest" />
      </TabsContent>
      <TabsContent value="trending">
        <ThemeListing filter="trending" />
      </TabsContent>
    </Tabs>
  );
};
