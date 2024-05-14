import Link from "next/link";

import { ThemeCard } from "~/components/theme/ThemeCard";
import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";

const { primary, secondary, accent, neutral } = DEFAULT_PALETTE;

export const DiscoverThemeCard = () => {
  return (
    <Link href="/theme/1234">
      <ThemeCard
        fonts={DEFAULT_FONTS}
        palette={{
          primary: primary.baseColour,
          secondary: secondary.baseColour,
          accent: accent.baseColour,
          neutral: neutral.baseColour,
        }}
        tags={["Light", "Serif", "Modern"]}
        showLikes
      />
    </Link>
  );
};
