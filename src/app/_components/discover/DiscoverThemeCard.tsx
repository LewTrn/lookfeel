import Link from "next/link";

import { useLandingStore } from "~/app/_store/useLandingStore";
import { ThemeCard } from "~/components/theme/ThemeCard";
import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";

const { primary, secondary, accent, neutral } = DEFAULT_PALETTE;

export const DiscoverThemeCard = () => {
  const setSelectedTheme = useLandingStore((state) => state.setSelectedTheme);

  const palette = {
    primary: primary.baseColour,
    secondary: secondary.baseColour,
    accent: accent.baseColour,
    neutral: neutral.baseColour,
  };

  return (
    <Link
      href="/theme/3E6Z59tkP8n3"
      onClick={() =>
        setSelectedTheme({
          baseColours: palette,
          fonts: DEFAULT_FONTS,
          likes: { likeCount: 120 },
        })
      }
    >
      <ThemeCard
        fonts={DEFAULT_FONTS}
        palette={palette}
        tags={["Light", "Serif", "Modern"]}
        showLikes
        likeCount={120}
      />
    </Link>
  );
};
