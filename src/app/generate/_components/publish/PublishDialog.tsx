import { type PropsWithChildren } from "react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";

const THEME_TAGS = ["Modern", "Retro", "Professional", "Fun"];

const COLOUR_TAGS = [
  "Light",
  "Dark",
  "Pastel",
  "Vibrant",
  "Warm",
  "Cold",
  "Rainbow",
  "Monochromatic",
  "2 Colors",
  "3 Colors",
];

const TYPOGRAPHY_TAGS = ["Serif", "Sans-serif", "Slab", "Handwritten"];

type ButtonGroupProps = {
  tags: string[];
  selectedTags: string[];
  disabled?: boolean;
  onClick: (tag: string) => void;
};

const ButtonGroup = ({
  tags,
  selectedTags,
  disabled,
  onClick,
}: ButtonGroupProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Button
            key={tag}
            variant={isSelected ? "secondary" : "outline"}
            className="px-4"
            onClick={() => onClick(tag)}
            disabled={disabled && !isSelected}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};

export const PublishDialog = ({ children }: PropsWithChildren) => {
  const selectedTags = useGenerateStore((state) => state.tags);
  const setTags = useGenerateStore((state) => state.setTags);

  const handleToggleTag = (tag: string) => {
    const tagsSet = new Set(selectedTags);

    if (tagsSet.has(tag)) {
      tagsSet.delete(tag);
    } else {
      tagsSet.add(tag);
    }

    setTags(Array.from(tagsSet));
  };

  return (
    <Dialog onOpenChange={() => setTags([])}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-96 flex-col justify-between">
        <DialogHeader>
          <DialogTitle>{strings.publish.tags.title}</DialogTitle>
          <DialogDescription>{strings.publish.tags.subtitle}</DialogDescription>
        </DialogHeader>
        <div className="mx-4 flex flex-col items-center gap-3">
          {[THEME_TAGS, COLOUR_TAGS, TYPOGRAPHY_TAGS].map((tags, index) => (
            <ButtonGroup
              key={index}
              tags={tags}
              selectedTags={selectedTags}
              disabled={selectedTags.length >= 3}
              onClick={handleToggleTag}
            />
          ))}
        </div>
        <DialogFooter>
          <Button variant="ghost" disabled={selectedTags.length === 0}>
            {strings.publish.next.action}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
