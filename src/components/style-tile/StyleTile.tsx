import { ArticleSection } from "./sections/ArticleSection";
import { ComponentSection } from "./sections/ComponentSection";
import { VisualSection } from "./sections/VisualSection";

export const StyleTile = () => {
  return (
    <div className="grid grid-cols-7 gap-12 rounded-lg bg-[#F0F7F4] p-8 shadow">
      <div className="col-span-2">
        <VisualSection />
      </div>
      <div className="col-span-3 flex flex-col gap-8">
        <ArticleSection />
      </div>
      <div className="col-span-2">
        <ComponentSection />
      </div>
    </div>
  );
};
