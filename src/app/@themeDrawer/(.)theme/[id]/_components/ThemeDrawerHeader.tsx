import { ArrowLeftIcon } from "lucide-react";

import { ViewThemeActions } from "~/app/theme/_components/header/ViewThemeActions";
import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { type Likes, type Theme } from "~/types/Theme";

type ViewThemeHeaderProps = {
  id: string;
  theme: Theme;
  likes: Likes;
  onBack: () => void;
};

export const ThemeDrawerHeader = ({
  id,
  theme,
  likes,
  onBack,
}: ViewThemeHeaderProps) => {
  return (
    <div className="sticky top-0 z-50 mx-2 mb-4 flex h-20 items-center justify-between gap-8 bg-background pl-2 pr-6">
      <Button variant="ghost" Icon={ArrowLeftIcon} onClick={onBack}>
        {strings.view.back.action}
      </Button>
      <ViewThemeActions id={id} theme={theme} likes={likes} />
    </div>
  );
};
