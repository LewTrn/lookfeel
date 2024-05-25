"use client";

import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { type ComponentProps, useState } from "react";
import tinycolor from "tinycolor2";

import { ColourRow } from "~/components/theme/view/details/ColourRow";
import { IconButton } from "~/components/ui/icon-button";
import { cn } from "~/lib/utils";

type CopyColourRowProps = ComponentProps<typeof ColourRow>;

export const CopyColourRow = (props: CopyColourRowProps) => {
  const [copied, setCopied] = useState(false);

  const whiteIsReadable = tinycolor.isReadable(props.value, "#fff", {
    size: "large",
  });

  const handleCopy = () => {
    const success = copy(props.value);

    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <button className="group relative flex w-full" onClick={handleCopy}>
      <ColourRow {...props} />
      <div className="absolute inset-0 bg-white opacity-0 transition-opacity wh-full group-hover:opacity-10" />
      <div
        className={cn(
          "absolute right-1 top-1 opacity-0 transition-opacity group-hover:opacity-100",
          whiteIsReadable ? "text-white" : "text-foreground",
        )}
      >
        <IconButton
          Icon={copied ? CheckIcon : CopyIcon}
          size="sm"
          variant="ghost"
          as="div"
        />
      </div>
    </button>
  );
};
