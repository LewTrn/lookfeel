"use client";

import Link from "next/link";

import { useLandingStore } from "~/app/_store/useLandingStore";
import { ThemeCard } from "~/components/theme/ThemeCard";
import { type Fonts } from "~/types/Fonts";
import { type BaseColours } from "~/types/Palette";
import { type Likes } from "~/types/Theme";

type DiscoverThemeCardProps = {
  palette: BaseColours;
  fonts: Fonts;
  tags: string[];
  likes: Likes;
};

export const DiscoverThemeCard = ({
  palette,
  fonts,
  tags,
  likes,
}: DiscoverThemeCardProps) => {
  const setSelectedTheme = useLandingStore((state) => state.setSelectedTheme);

  return (
    <Link
      href="/theme/3E6Z59tkP8n3"
      onClick={() =>
        setSelectedTheme({
          baseColours: palette,
          fonts: fonts,
          likes,
        })
      }
    >
      <ThemeCard
        fonts={fonts}
        palette={palette}
        tags={tags}
        showLikes
        likeCount={likes.likeCount}
      />
    </Link>
  );
};
