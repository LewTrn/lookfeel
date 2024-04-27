import { Fonts } from "./Fonts";
import { Header } from "./Header";
import { Palette } from "./Palette";

export const Options = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-8">
        <Palette />
        <Fonts />
      </div>
    </div>
  );
};
