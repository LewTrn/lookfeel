import { createContext, type PropsWithChildren, useContext } from "react";

import { DEFAULT_PALETTE } from "~/app/constants/palette";
import { type Palette } from "~/types/Palette";

import { getThemeStyle } from "./getThemeStyle";

type ThemeProviderProps = PropsWithChildren<{
  className?: string;
  theme: { palette: Palette };
}>;

const initialTheme = {
  palette: DEFAULT_PALETTE,
};

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = ({
  className,
  theme,
  children,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={className} style={getThemeStyle(theme.palette)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
