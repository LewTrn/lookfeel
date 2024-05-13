import { Template } from "../template/Template";
import { type ThemeProviderTheme } from "../theme/types";
import { ArticleBlock } from "./sections/ArticleBlock";
import { ButtonBlock } from "./sections/ButtonBlock";
import { ComponentBlock } from "./sections/ComponentBlock";
import { PaletteBlock } from "./sections/PaletteBlock";
import { VisualBlock } from "./sections/VisualBlock";

type StyleTileProps = {
  theme: ThemeProviderTheme;
};

export const StyleTile = ({ theme }: StyleTileProps) => {
  return (
    <Template theme={theme}>
      <div className="flex gap-12 p-8">
        <div className="col-span-2">
          <VisualBlock />
        </div>
        <div className="col-span-3 flex flex-col gap-8">
          <PaletteBlock />
          <ArticleBlock />
          <ButtonBlock />
        </div>
        <div className="col-span-2">
          <ComponentBlock />
        </div>
      </div>
    </Template>
  );
};
