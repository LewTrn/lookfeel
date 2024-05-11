"use client";

import { FlameIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";

import { ThemeCard } from "~/components/theme/ThemeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";
import { strings } from "~/locales/landing";

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
            theme={{ fonts: DEFAULT_FONTS, palette: DEFAULT_PALETTE }}
            showLikes
          />
          <ThemeCard
            theme={{ fonts: DEFAULT_FONTS, palette: DEFAULT_PALETTE }}
            showLikes
          />
          <ThemeCard
            theme={{ fonts: DEFAULT_FONTS, palette: DEFAULT_PALETTE }}
            showLikes
          />
        </div>
      </TabsContent>
      <TabsContent value="popular"></TabsContent>
      <TabsContent value="latest"></TabsContent>
    </Tabs>
  );
};
