import { type ThemeProviderTheme } from "../theme/types";
import CodeBlock from "./CodeBlock";

type TailwindCodeBlockProps = {
  theme: Required<ThemeProviderTheme>;
};

export const TailwindCodeBlock = ({ theme }: TailwindCodeBlockProps) => {
  const { primary, secondary, accent, neutral } = theme.palette;

  return (
    <CodeBlock
      title="tailwind.config.js"
      code={`colors: {
  'primary': '${primary.baseColour}',
  'secondary': '${secondary.baseColour}',
  'accent': '${accent.baseColour}',
  'neutral': '${neutral.baseColour}',
},`}
    />
  );
};
