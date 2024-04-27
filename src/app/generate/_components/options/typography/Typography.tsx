import { strings } from "~/locales/generate";

import { Heading } from "../Heading";
import { Fonts } from "./Fonts";

export const Typography = () => {
  return (
    <div>
      <Heading>{strings.options.typography.title}</Heading>
      <Fonts />
    </div>
  );
};
