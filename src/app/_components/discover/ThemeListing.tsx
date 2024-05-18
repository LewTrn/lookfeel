"use client";

import { api } from "~/trpc/react";

import { DiscoverThemeCard } from "./DiscoverThemeCard";

type ThemeListingProps = {
  filter: "latest" | "trending";
};

const CardSkeleton = () => (
  <div className="h-[182.5px] animate-pulse rounded-lg bg-accent/50" />
);

export const ThemeListing = ({ filter }: ThemeListingProps) => {
  const { data, isLoading } = api.theme.getThemes.useQuery(
    { filter },
    { refetchOnMount: false },
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      {data?.map(({ id, liked, like_count: likeCount = 0, ...rest }) => (
        <DiscoverThemeCard
          key={id}
          id={id}
          likes={{ likeCount, liked }}
          {...rest}
        />
      ))}
    </div>
  );
};
