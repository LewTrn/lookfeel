import { Fonts } from "./Fonts";
import { Palette } from "./Palette";

export const Options = () => {
  return (
    <div className="flex flex-col gap-4">
      <Palette />
      <Fonts />
    </div>
  );
};
