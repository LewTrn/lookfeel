"use client";

import { FlameIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/landing";

export const Discover = () => {
  return (
    <div>
      <Tabs defaultValue="trending">
        <TabsList className="mb-6">
          <TabsTrigger value="trending" Icon={FlameIcon}>
            {strings.discover.filter.trending.action}
          </TabsTrigger>
          <TabsTrigger value="popular" Icon={TrendingUpIcon}>
            {strings.discover.filter.popular.action}
          </TabsTrigger>
          <TabsTrigger value="latest" Icon={SparklesIcon}>
            {strings.discover.filter.latest.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="trending"></TabsContent>
        <TabsContent value="popular"></TabsContent>
        <TabsContent value="latest"></TabsContent>
      </Tabs>
    </div>
  );
};