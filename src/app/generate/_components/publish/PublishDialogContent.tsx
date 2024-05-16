import copy from "copy-to-clipboard";
import { CopyIcon, ExternalLinkIcon } from "lucide-react";
import { useState } from "react";

import { ThemeCard } from "~/components/theme/ThemeCard";
import { Button } from "~/components/ui/button";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/generate";
import { type Fonts } from "~/types/Fonts";
import { type BaseColours } from "~/types/Palette";

type PublishDialogContentProps = {
  id?: string;
  palette: BaseColours;
  fonts: Fonts;
  tags: string[];
};

export const PublishDialogContent = ({
  id,
  palette,
  fonts,
  tags,
}: PublishDialogContentProps) => {
  const [copied, setCopied] = useState(false);
  const { primary, secondary, accent } = palette;

  const handleCopy = () => {
    const success = copy(`${window.location.origin}/theme/${id}`);

    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <>
      <div
        className="flex h-full flex-col items-center justify-center"
        style={{
          background: `linear-gradient(45deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
        }}
      >
        <div className="flex w-80 flex-col gap-4 pt-4">
          <ThemeCard palette={palette} fonts={fonts} tags={tags} />
          <div className="grid grid-cols-2 gap-2">
            <LinkButton
              href={`/theme/${id}`}
              variant="tint"
              Icon={ExternalLinkIcon}
              loading={!id}
              className="w-full"
              asAnchor
            >
              {strings.publish.open.action}
            </LinkButton>
            <Button
              variant="tint"
              Icon={CopyIcon}
              loading={!id}
              onClick={handleCopy}
            >
              {copied
                ? strings.publish.copied.action
                : strings.publish.share.action}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
