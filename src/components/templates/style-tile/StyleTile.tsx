import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import { ColourType } from "~/app/generate/_types/Colour";

import { ArticleBlock } from "./sections/ArticleBlock";
import { ButtonBlock } from "./sections/ButtonBlock";
import { ComponentBlock } from "./sections/ComponentBlock";
import { PaletteBlock } from "./sections/PaletteBlock";
import { VisualBlock } from "./sections/VisualBlock";

export const StyleTile = () => {
  const shades = useGenerateStore((state) => state.shades);

  return (
    <div
      className="grid grid-cols-7 gap-12 rounded-lg bg-[#F0F7F4] p-8 shadow"
      style={{
        backgroundColor: shades?.[ColourType.Primary].swatch[50],
        color: shades?.[ColourType.Neutral].swatch[950],
      }}
    >
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
  );
};
