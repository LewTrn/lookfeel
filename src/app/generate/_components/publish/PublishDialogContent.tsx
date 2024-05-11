import { CopyIcon, ExternalLinkIcon } from "lucide-react";

import { ThemeCard } from "~/components/theme/ThemeCard";
import { Button } from "~/components/ui/button";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";

export const PublishDialogContent = () => {
  const fonts = useGenerateStore((state) => state.fonts);
  const palette = useGenerateStore((state) => state.palette);
  const tags = useGenerateStore((state) => state.tags);

  const { primary, secondary, accent } = palette;

  return (
    <>
      <div
        className="flex h-full flex-col items-center justify-center"
        style={{
          background: `linear-gradient(45deg, ${primary.baseColour} 0%, ${secondary.baseColour} 50%, ${accent.baseColour} 100%)`,
        }}
      >
        <div className="flex w-80 flex-col gap-4 pt-4">
          <ThemeCard theme={{ fonts, palette }} tags={tags} />
          <div className="grid grid-cols-2 gap-2">
            <Button variant="tint" Icon={ExternalLinkIcon}>
              {strings.publish.open.action}
            </Button>
            <Button variant="tint" Icon={CopyIcon}>
              {strings.publish.share.action}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
