import { useRef, useState } from "react";

import { type Theme } from "~/types/Theme";

import { ThemeFonts } from "./ThemeFonts";
import { ThemeTags } from "./ThemeTags";

export type ThemeCardProps = {
  theme: Theme;
  showLikes?: boolean;
};

export const ThemeCard = ({ theme, showLikes }: ThemeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const fontsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  const [fontsX, setFontsX] = useState(0);
  const [tagsX, setTagsX] = useState(0);

  const {
    palette: { primary, secondary, accent, neutral },
  } = theme;

  return (
    <div className="group relative rounded-lg">
      <div className="absolute inset-0 -z-10 scale-90 rounded-lg shadow transition-transform duration-300 wh-full group-hover:scale-100" />
      <div
        ref={cardRef}
        className="flex w-full flex-col overflow-hidden rounded-lg border bg-card p-3 text-card-foreground"
        onMouseEnter={() => {
          // Remove additional padding width
          const cardWidth = (cardRef.current?.offsetWidth ?? 0) - 38;
          const fontsWidth = fontsRef.current?.offsetWidth ?? 0;
          const tagsWidth = tagsRef.current?.offsetWidth ?? 0;

          const tagsOffset = showLikes ? 56 : 0;

          setFontsX(Math.min(cardWidth - fontsWidth, 0));
          setTagsX(Math.min(cardWidth - tagsOffset - tagsWidth, 0));
        }}
        onMouseLeave={() => {
          setFontsX(0);
          setTagsX(0);
        }}
      >
        <div className="grid h-20 flex-shrink-0 grid-cols-4 overflow-hidden rounded-lg">
          <div
            className="wh-full"
            style={{ backgroundColor: primary.baseColour }}
          />
          <div
            className="wh-full"
            style={{ backgroundColor: secondary.baseColour }}
          />
          <div
            className="wh-full"
            style={{ backgroundColor: accent.baseColour }}
          />
          <div
            className="wh-full"
            style={{ backgroundColor: neutral.baseColour }}
          />
        </div>
        <div className="px-1">
          <ThemeFonts ref={fontsRef} translateX={fontsX} fonts={theme.fonts} />
          <ThemeTags
            ref={tagsRef}
            translateX={tagsX}
            tags={["Monochromatic", "Handwritten", "Professional"]}
            showLikes={showLikes}
          />
        </div>
      </div>
    </div>
  );
};
