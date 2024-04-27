import { Fonts } from "./Fonts";
import { Palette } from "./Palette";

export const Theme = () => {
  return (
    <div className="mt-16 flex gap-10">
      <div className="flex w-[336px] -translate-x-2 flex-col gap-4">
        <Palette />
        <Fonts />
      </div>
      <div className="w-full"></div>
    </div>
  );
};
