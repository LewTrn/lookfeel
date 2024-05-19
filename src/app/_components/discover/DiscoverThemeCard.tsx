"use client";

import Link from "next/link";

import { useLandingStore } from "~/app/_store/useLandingStore";
import { ThemeCard } from "~/components/theme/ThemeCard";
import { type PreviewThemeCard } from "~/types/Theme";

export const DiscoverThemeCard = ({
  id,
  baseColours,
  fonts,
  tags,
  likes,
}: PreviewThemeCard) => {
  const setSelectedTheme = useLandingStore((state) => state.setSelectedTheme);

  return (
    <Link
      href={`/theme/${id}`}
      onClick={() =>
        setSelectedTheme({
          baseColours,
          fonts: fonts,
          likes,
        })
      }
    >
      <ThemeCard
        fonts={fonts}
        palette={baseColours}
        tags={tags}
        showLikes
        likeCount={likes.likeCount}
        liked={likes.liked}
      />
    </Link>
  );
};
