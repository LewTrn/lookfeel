import { LockKeyholeIcon, LockKeyholeOpenIcon } from "lucide-react";
import { type ComponentProps } from "react";

import { FontRow } from "~/components/theme/view/details/FontRow";
import { Combobox } from "~/components/ui/combobox";
import { IconButton } from "~/components/ui/icon-button";
import { POPULAR_FONTS } from "~/constants/fonts";
import { cn } from "~/lib/utils";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { useFontParams } from "../../_utils/params/useFontParams";

type FontPickerRowProps = ComponentProps<typeof FontRow>;

export const FontPickerRow = (props: FontPickerRowProps) => {
  const fonts = useGenerateStore((state) => state.fonts);
  const updateFont = useGenerateStore((state) => state.updateFont);
  const locked = useGenerateStore((state) => state.locked);
  const toggleLock = useGenerateStore((state) => state.toggleLock);

  const setFontParams = useFontParams();

  const isLocked = locked.includes(props.typographyType);

  return (
    <Combobox
      asChild
      placeholder={strings.typography.font.search.description}
      emptyDescription={strings.typography.font.empty.description}
      items={POPULAR_FONTS}
      selectedValue={fonts[props.typographyType]}
      getItem={(item) => ({ value: item.family, label: item.family })}
      onSelect={(value) => {
        const { heading, body } = updateFont({
          typographyType: props.typographyType,
          font: value,
        });
        setFontParams([heading, body]);
      }}
    >
      <button className="group relative flex w-full text-left">
        <FontRow {...props} />
        <div className="absolute inset-0 -left-2 -top-1 -z-10 h-[calc(100%+8px)] w-[calc(100%+8px)] rounded-lg bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute right-1 top-0">
          <IconButton
            Icon={isLocked ? LockKeyholeIcon : LockKeyholeOpenIcon}
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              toggleLock(props.typographyType);
            }}
          />
        </div>
      </button>
    </Combobox>
  );
};
