import { ViewTheme } from "~/components/theme/view/ViewTheme";
import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";

export const ViewThemeContainer = () => {
  const theme = {
    palette: DEFAULT_PALETTE,
    fonts: DEFAULT_FONTS,
  };

  return <ViewTheme theme={theme} />;
};
