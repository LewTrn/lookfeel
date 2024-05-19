import { type ComponentProps, type ComponentType } from "react";

import { strings } from "~/locales/lookfeel";
import { type Fonts } from "~/types/Fonts";

import { FontRow } from "./FontRow";

type FontDetailsProps = {
  fonts: Fonts;
  CustomFontRow?: ComponentType<ComponentProps<typeof FontRow>>;
};

export const FontDetails = ({ fonts, CustomFontRow }: FontDetailsProps) => {
  const { heading, body } = fonts;
  const Row = CustomFontRow ? CustomFontRow : FontRow;

  return (
    <div className="ml-2 flex flex-col gap-4">
      <Row font={heading} label={strings.typography.heading.label} />
      <Row font={body} label={strings.typography.body.label} />
    </div>
  );
};
