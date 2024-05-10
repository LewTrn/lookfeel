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

export const PublishDialog = ({ children }: PropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-96 flex-col justify-between">
        <DialogHeader>
          <DialogTitle>{strings.publish.tags.title}</DialogTitle>
          <DialogDescription>{strings.publish.tags.subtitle}</DialogDescription>
        </DialogHeader>
        <div className="mx-4 flex flex-col items-center gap-3">
          <div className="flex flex-wrap gap-3">
            {THEME_TAGS.map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {COLOUR_TAGS.map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {TYPOGRAPHY_TAGS.map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button>{strings.publish.continue.action}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
