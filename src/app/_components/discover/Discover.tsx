"use client";

import { FlameIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/landing";

import { ThemeCard } from "./ThemeCard";

export const Discover = () => {
  return (
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
      <TabsContent value="trending">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ThemeCard
            headingFont="Noto Sans Japanese"
            bodyFont="Noto Sans Japanese"
          />
          <ThemeCard headingFont="Noto Sans" bodyFont="Georgia" />
          <ThemeCard
            headingFont="Noto Sans Japanese"
            bodyFont="Noto Sans Japanese"
          />
          <ThemeCard headingFont="Noto Sans" bodyFont="Georgia" />
          <ThemeCard headingFont="Noto Sans" bodyFont="Georgia" />
        </div>
      </TabsContent>
      <TabsContent value="popular"></TabsContent>
      <TabsContent value="latest"></TabsContent>
    </Tabs>
  );
};
