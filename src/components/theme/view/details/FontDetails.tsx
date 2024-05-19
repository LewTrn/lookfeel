import { type ComponentProps, type ComponentType } from "react";

import { type Fonts, Typography } from "~/types/Fonts";

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
      <Row font={heading} typographyType={Typography.Heading} />
      <Row font={body} typographyType={Typography.Body} />
    </div>
  );
};
