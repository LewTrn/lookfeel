import { strings } from "~/locales/generate";

import { Heading } from "../Heading";
import { Palette } from "./Palette";

export const Colours = () => {
  return (
    <div>
      <Heading>{strings.options.colour.title}</Heading>
      <Palette />
    </div>
  );
};
