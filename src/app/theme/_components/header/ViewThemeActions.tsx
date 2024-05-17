import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/theme";
import { type Theme } from "~/types/Theme";
import { getThemeParams } from "~/utils/theme/getThemeParams";

import { LikeThemeButton } from "./LikeThemeButton";

type ViewThemeActionsProps = {
  id: string;
  theme: Theme;
};

export const ViewThemeActions = ({ id, theme }: ViewThemeActionsProps) => {
  const params = getThemeParams(theme);

  return (
    <div className="flex gap-2">
      <LikeThemeButton id={id} />
      <LinkButton href={`/generate?${params}`}>
        {strings.view.edit.action}
      </LinkButton>
    </div>
  );
};
