import { ViewTheme } from "~/components/theme/view/ViewTheme";
import { type Theme } from "~/types/Theme";

import { CopyColourRow } from "./colours/CopyColourRow";
import { FontLinkRow } from "./fonts/FontLinkRow";

type ViewThemeContainerProps = {
  theme: Theme;
};

export const ViewThemeContainer = ({ theme }: ViewThemeContainerProps) => {
  return (
    <ViewTheme
      theme={theme}
      CustomColourRow={CopyColourRow}
      CustomFontRow={FontLinkRow}
      isView
    />
  );
};
