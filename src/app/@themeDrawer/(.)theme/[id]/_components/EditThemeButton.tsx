import Link from "next/link";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { type Theme } from "~/types/Theme";
import { getThemeParams } from "~/utils/theme/getThemeParams";

type EditThemeButtonProps = {
  theme: Theme;
};

export const EditThemeButton = ({ theme }: EditThemeButtonProps) => {
  const params = getThemeParams(theme);

  return (
    <Link href={`/generate?${params}`}>
      <Button>{strings.view.edit.action}</Button>
    </Link>
  );
};
