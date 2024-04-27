import { strings } from "~/locales/generate";

import { Heading } from "../Heading";
import { Palette } from "./Palette";

export const Colours = () => {
  return (
    <div>
      <Heading>{strings.options.colour.title}</Heading>
      <div className="w-[calc(100%+16px)] -translate-x-2">
        <Palette />
      </div>
    </div>
  );
};
