import { strings } from "~/locales/generate";

import { Heading } from "../Heading";
import { Fonts } from "./Fonts";

export const Typography = () => {
  return (
    <div>
      <Heading>{strings.options.typography.title}</Heading>
      <div className="w-[calc(100%+16px)] -translate-x-2">
        <Fonts />
      </div>
    </div>
  );
};
