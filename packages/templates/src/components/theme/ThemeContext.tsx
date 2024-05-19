"use client";

import { createContext, type PropsWithChildren, useContext } from "react";

import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";
import { useLoadFont } from "~/utils/typography/useLoadFont";

import { getThemeStyle } from "./getThemeStyle";
import { type ThemeProviderTheme } from "./types";

type ThemeProviderProps = PropsWithChildren<{
  className?: string;
  theme: ThemeProviderTheme;
}>;

const initialTheme = {
  palette: DEFAULT_PALETTE,
  fonts: DEFAULT_FONTS,
};

export const ThemeContext = createContext<ThemeProviderTheme>(initialTheme);

const LoadFonts = ({
  heading,
  body,
}: NonNullable<ThemeProviderTheme["fonts"]>) => {
  useLoadFont(heading);
  useLoadFont(body);

  return null;
};

export const ThemeProvider = ({
  className,
  theme,
  children,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={className} style={getThemeStyle(theme)}>
        {children}
      </div>
      {theme.fonts && <LoadFonts {...theme.fonts} />}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
