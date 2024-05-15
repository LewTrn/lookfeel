import { ArrowLeftIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { type Theme } from "~/types/Theme";

import { EditThemeButton } from "./EditThemeButton";

type ViewThemeHeaderProps = {
  theme: Theme;
  onBack: () => void;
};

export const ThemeDrawerHeader = ({ theme, onBack }: ViewThemeHeaderProps) => {
  return (
    <div className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between gap-8 bg-background pl-2 pr-6">
      <Button variant="ghost" Icon={ArrowLeftIcon} onClick={onBack}>
        {strings.view.back.action}
      </Button>
      <EditThemeButton theme={theme} />
    </div>
  );
};
