import { ArticleBlock } from "./sections/ArticleBlock";
import { ComponentBlock } from "./sections/ComponentBlock";
import { PaletteBlock } from "./sections/PaletteBlock";
import { VisualBlock } from "./sections/VisualBlock";

export const StyleTile = () => {
  return (
    <div className="grid grid-cols-7 gap-12 rounded-lg bg-[#F0F7F4] p-8 shadow">
      <div className="col-span-2">
        <VisualBlock />
      </div>
      <div className="col-span-3 flex flex-col gap-8">
        <PaletteBlock />
        <ArticleBlock />
      </div>
      <div className="col-span-2">
        <ComponentBlock />
      </div>
    </div>
  );
};
