import { ArrowLeftIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";

type ViewThemeHeaderProps = {
  onBack: () => void;
};

export const ViewThemeHeader = ({ onBack }: ViewThemeHeaderProps) => {
  return (
    <div className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between gap-8 bg-background px-2">
      <Button variant="ghost" Icon={ArrowLeftIcon} onClick={onBack}>
        {strings.view.back.action}
      </Button>
      <Button>{strings.view.modify.action}</Button>
    </div>
  );
};
