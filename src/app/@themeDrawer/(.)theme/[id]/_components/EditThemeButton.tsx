import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/theme";
import { type Theme } from "~/types/Theme";
import { getThemeParams } from "~/utils/theme/getThemeParams";

type EditThemeButtonProps = {
  theme: Theme;
};

export const EditThemeButton = ({ theme }: EditThemeButtonProps) => {
  const params = getThemeParams(theme);

  return (
    <LinkButton href={`/generate?${params}`}>
      {strings.view.edit.action}
    </LinkButton>
  );
};
