import { LinkButton } from "~/components/ui/link-button";
import { auth } from "~/edgedb";
import { strings } from "~/locales/theme";
import { type Theme } from "~/types/Theme";
import { getThemeParams } from "~/utils/theme/getThemeParams";

import { LikeThemeButton } from "./LikeThemeButton";
import { UnauthedLikeThemeButton } from "./UnauthedLikeThemeButton";

type ViewThemeActionsProps = {
  id: string;
  theme: Theme;
};

export const ViewThemeActions = async ({
  id,
  theme,
}: ViewThemeActionsProps) => {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  const params = getThemeParams(theme);

  return (
    <div className="flex gap-2">
      <LinkButton href={`/generate?${params}`} variant="ghost">
        {strings.view.edit.action}
      </LinkButton>
      {signedIn ? (
        <LikeThemeButton id={id} />
      ) : (
        <UnauthedLikeThemeButton href={auth.getBuiltinUIUrl()} />
      )}
    </div>
  );
};
