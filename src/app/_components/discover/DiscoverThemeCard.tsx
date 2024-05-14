import { XIcon } from "lucide-react";

import { ThemeCard } from "~/components/theme/ThemeCard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { IconButton } from "~/components/ui/icon-button";
import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";

const { primary, secondary, accent, neutral } = DEFAULT_PALETTE;

export const DiscoverThemeCard = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <ThemeCard
          fonts={DEFAULT_FONTS}
          palette={{
            primary: primary.baseColour,
            secondary: secondary.baseColour,
            accent: accent.baseColour,
            neutral: neutral.baseColour,
          }}
          tags={["Light", "Serif", "Modern"]}
          showLikes
        />
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100%-64px)]">
        <div className="absolute right-3 top-[-52px]">
          <DrawerClose asChild>
            <IconButton Icon={XIcon} />
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
