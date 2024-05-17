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
      {signedIn ? (
        <LikeThemeButton id={id} />
      ) : (
        <UnauthedLikeThemeButton href={auth.getBuiltinUIUrl()} />
      )}
      <LinkButton href={`/generate?${params}`}>
        {strings.view.edit.action}
      </LinkButton>
    </div>
  );
};
