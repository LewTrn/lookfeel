import { type PropsWithChildren } from "react";

import { type Theme, ThemeProvider } from "../theme/ThemeContext";

type TemplateProps = PropsWithChildren<{
  theme?: Theme;
}>;

export const Template = ({ theme, children }: TemplateProps) => {
  return (
    <ThemeProvider
      className="mx-auto max-w-7xl overflow-clip rounded-[1rem] shadow"
      theme={{ palette: theme?.palette }}
    >
      {children}
    </ThemeProvider>
  );
};
