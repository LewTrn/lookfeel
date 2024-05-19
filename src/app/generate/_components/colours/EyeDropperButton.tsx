import { PipetteIcon } from "lucide-react";

import { IconButton } from "~/components/ui/icon-button";

declare class EyeDropper {
  open: () => Promise<{ sRGBHex: string }>;
}

type EyeDropperButton = {
  onSelectColour: (colour: string) => void;
  onClose?: () => void;
};

export const EyeDropperButton = ({
  onSelectColour,
  onClose,
}: EyeDropperButton) => {
  const isSupported = "EyeDropper" in window;

  if (!isSupported) return null;

  const handleSelectColour = () => {
    const dropper = new EyeDropper();

    dropper
      .open()
      .then(({ sRGBHex }) => {
        onSelectColour(sRGBHex);
        onClose?.();
      })
      .catch(() => {
        onClose?.();
      });
  };

  return (
    <IconButton Icon={PipetteIcon} size="sm" onClick={handleSelectColour} />
  );
};
