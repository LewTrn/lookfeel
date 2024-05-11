import { forwardRef } from "react";

import { type Fonts } from "~/types/Fonts";

import Typography from "../ui/typography";

type ThemeFontsProps = {
  fonts: Fonts;
  translateX: number;
};

export const ThemeFonts = forwardRef<HTMLDivElement, ThemeFontsProps>(
  ({ fonts, translateX }, ref) => {
    const { heading, body } = fonts;

    return (
      <div className="relative my-2 flex items-center gap-3">
        <Typography
          ref={ref}
          variant="h2"
          className="mb-0 whitespace-nowrap font-normal transition-transform ease-linear"
          style={{
            transitionDuration: translateX ? "1500ms" : "300ms",
            transform: `translateX(${translateX}px)`,
          }}
        >
          <span>{heading}</span>
          {heading !== body && (
            <>
              <span className="mx-1">•</span>
              <span>{body}</span>
            </>
          )}
        </Typography>
        <div className="absolute -left-4 h-full w-4 bg-gradient-to-r from-card via-card to-transparent" />
        <div className="absolute -right-4 h-full w-4 bg-gradient-to-l from-card via-card to-transparent" />
      </div>
    );
  },
);

ThemeFonts.displayName = "ThemeFonts";
