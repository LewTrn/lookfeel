"use client";

import {
  FlameIcon,
  HeartIcon,
  SparklesIcon,
  SwatchBookIcon,
} from "lucide-react";

import { useSignedIn } from "~/components/auth/AuthProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/landing";

import { ThemeListing } from "./ThemeListing";

export const Discover = () => {
  const { signedIn } = useSignedIn();

  return (
    <Tabs defaultValue="latest">
      <TabsList className="mb-6">
        <TabsTrigger value="latest" Icon={SparklesIcon}>
          {strings.discover.filter.latest.action}
        </TabsTrigger>
        <TabsTrigger value="trending" Icon={FlameIcon}>
          {strings.discover.filter.trending.action}
        </TabsTrigger>
        <TabsTrigger
          value="liked"
          Icon={HeartIcon}
          className="ml-auto"
          disabled={!signedIn}
        >
          {strings.discover.filter.liked.action}
        </TabsTrigger>
        <TabsTrigger value="created" Icon={SwatchBookIcon} disabled={!signedIn}>
          {strings.discover.filter.myThemes.action}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="latest">
        <ThemeListing filter="latest" />
      </TabsContent>
      <TabsContent value="trending">
        <ThemeListing filter="trending" />
      </TabsContent>
      <TabsContent value="liked">
        <ThemeListing filter="liked" />
      </TabsContent>
      <TabsContent value="created">
        <ThemeListing filter="created" />
      </TabsContent>
    </Tabs>
  );
};
