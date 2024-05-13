import { type PropsWithChildren } from "react";

import { ThemeProvider } from "../theme/ThemeContext";
import { type ThemeProviderTheme } from "../theme/types";

type TemplateProps = PropsWithChildren<{
  theme?: ThemeProviderTheme;
}>;

export const Template = ({ theme = {}, children }: TemplateProps) => {
  return (
    <ThemeProvider
      className="mx-auto max-w-7xl overflow-clip rounded-[1rem] shadow"
      theme={theme}
    >
      {children}
    </ThemeProvider>
  );
};
