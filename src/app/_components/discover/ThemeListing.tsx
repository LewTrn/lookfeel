"use client";

import { useMemo } from "react";

import { api } from "~/trpc/react";
import { type PreviewThemeCard } from "~/types/Theme";

import { DiscoverThemeCard } from "./DiscoverThemeCard";

type ThemeListingProps = {
  filter: "latest" | "trending" | "liked" | "created";
};

const CardSkeleton = () => (
  <div className="h-[182.5px] animate-pulse rounded-lg bg-accent/50" />
);

export const ThemeListing = ({ filter }: ThemeListingProps) => {
  const { data, isLoading } = api.theme.getThemes.useQuery(
    { filter },
    { refetchOnMount: false },
  );

  const cards = useMemo(() => {
    return data?.map(({ id, liked, like_count: likeCount = 0, ...rest }) => {
      const card = {
        id,
        likes: { likeCount, liked },
        ...rest,
      } as unknown as PreviewThemeCard;
      return card;
    });
  }, [data]);

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
      {cards?.map((card) => <DiscoverThemeCard key={card.id} {...card} />)}
    </div>
  );
};
