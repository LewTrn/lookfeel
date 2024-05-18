"use client";

import { api } from "~/trpc/react";

import { DiscoverThemeCard } from "./DiscoverThemeCard";

type ThemeListingProps = {
  filter: "latest" | "trending";
};

export const ThemeListing = ({ filter }: ThemeListingProps) => {
  const { data } = api.theme.getThemes.useQuery(
    { filter },
    { refetchOnMount: false },
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map(({ id, liked, like_count: likeCount = 0, ...rest }) => (
        <DiscoverThemeCard key={id} likes={{ likeCount, liked }} {...rest} />
      ))}
    </div>
  );
};
