"use client";

import Link from "next/link";

import { useLandingStore } from "~/app/_store/useLandingStore";
import { ThemeCard } from "~/components/theme/ThemeCard";
import { type Fonts } from "~/types/Fonts";
import { type BaseColours } from "~/types/Palette";
import { type Likes } from "~/types/Theme";

type DiscoverThemeCardProps = {
  id: string;
  palette: BaseColours;
  fonts: Fonts;
  tags: string[];
  likes: Likes;
};

export const DiscoverThemeCard = ({
  id,
  palette,
  fonts,
  tags,
  likes,
}: DiscoverThemeCardProps) => {
  const setSelectedTheme = useLandingStore((state) => state.setSelectedTheme);

  return (
    <Link
      href={`/theme/${id}`}
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
