import { type ThemeProviderTheme } from "../theme/types";
import CodeBlock from "./CodeBlock";

type CssCodeBlockProps = {
  theme: Required<ThemeProviderTheme>;
};

export const CssCodeBlock = ({ theme }: CssCodeBlockProps) => {
  const { primary, secondary, accent, neutral } = theme.palette;

  return (
    <CodeBlock
      title="CSS Variables"
      code={`--primary: ${primary.baseColour};
--secondary: ${secondary.baseColour};
--accent: ${accent.baseColour};
--neutral: ${neutral.baseColour};`}
    />
  );
};
