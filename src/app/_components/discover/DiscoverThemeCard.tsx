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
      href="/theme/3fp2V-gpL30M"
      onClick={() =>
        setSelectedTheme({ baseColours: palette, fonts: DEFAULT_FONTS })
      }
    >
      <ThemeCard
        fonts={DEFAULT_FONTS}
        palette={palette}
        tags={["Light", "Serif", "Modern"]}
        showLikes
      />
    </Link>
  );
};
