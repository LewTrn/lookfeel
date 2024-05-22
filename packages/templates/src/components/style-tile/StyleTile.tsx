import { type Theme } from "~/types/Theme";

import { Template } from "../template/Template";
import { ArticleBlock } from "./sections/ArticleBlock";
import { ButtonBlock } from "./sections/ButtonBlock";
import { ComponentBlock } from "./sections/ComponentBlock";
import { PaletteBlock } from "./sections/PaletteBlock";
import { VisualBlock } from "./sections/VisualBlock";

type StyleTileProps = {
  theme: Theme;
};

export const StyleTile = ({ theme }: StyleTileProps) => {
  const { palette } = theme;
  return (
    <Template theme={theme}>
      <div className="flex gap-12 bg-background p-8">
        <div className="col-span-2">
          <VisualBlock palette={palette} />
        </div>
        <div className="col-span-3 flex flex-col gap-8">
          <PaletteBlock palette={palette} />
          <ArticleBlock palette={palette} />
          <ButtonBlock />
        </div>
        <div className="col-span-2">
          <ComponentBlock />
        </div>
      </div>
    </Template>
  );
};
