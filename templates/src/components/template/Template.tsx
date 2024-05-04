import { type PropsWithChildren } from "react";

import { type Theme, ThemeProvider } from "../theme/ThemeContext";

type TemplateProps = PropsWithChildren<{
  theme: Theme;
}>;

export const Template = (props: TemplateProps) => {
  return (
    <ThemeProvider className="overflow-clip rounded-[1rem] shadow" {...props} />
  );
};
