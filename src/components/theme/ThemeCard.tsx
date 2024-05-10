import { HeartIcon } from "lucide-react";
import { useRef, useState } from "react";

import Typography from "~/components/ui/typography";

import { Badge } from "../ui/badge";

export type ThemeCardProps = {
  headingFont: string;
  bodyFont: string;
};

export const ThemeCard = ({ headingFont, bodyFont }: ThemeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  const [typeX, setTypeX] = useState(0);
  const [tagsX, setTagsX] = useState(0);

  return (
    <div
      ref={cardRef}
      className="group relative flex w-full flex-col rounded-lg border bg-card p-3 text-card-foreground"
      onMouseEnter={() => {
        // Remove additional padding width
        const cardWidth = (cardRef.current?.offsetWidth ?? 0) - 38;
        const typeWidth = typeRef.current?.offsetWidth ?? 0;
        const tagsWidth = tagsRef.current?.offsetWidth ?? 0;

        setTypeX(Math.min(cardWidth - typeWidth, 0));
        setTagsX(Math.min(cardWidth - 44 - tagsWidth, 0));
      }}
      onMouseLeave={() => {
        setTypeX(0);
        setTagsX(0);
      }}
    >
      <div className="absolute inset-0 -z-10 scale-90 rounded-lg shadow transition-transform duration-300 wh-full group-hover:scale-100" />
      <div className="grid h-20 flex-shrink-0 grid-cols-4 overflow-hidden rounded-lg">
        <div className="bg-red-500 wh-full" />
        <div className="bg-blue-500 wh-full" />
        <div className="bg-pink-500 wh-full" />
        <div className="bg-yellow-500 wh-full" />
      </div>
      <div className="overflow-hidden px-1">
        <div className="relative my-2 flex items-center gap-3">
          <Typography
            ref={typeRef}
            variant="h2"
            className="whitespace-nowrap font-normal transition-transform ease-linear"
            style={{
              transitionDuration: typeX ? "1500ms" : "300ms",
              transform: `translateX(${typeX}px)`,
            }}
          >
            <span className="font-serif">{headingFont}</span>
            <span className="mx-1">•</span>
            <span>{bodyFont}</span>
          </Typography>
          <div className="absolute -left-2 h-full w-2 bg-gradient-to-r from-card to-transparent" />
          <div className="absolute -right-2 h-full w-4 bg-gradient-to-l from-card to-transparent" />
        </div>
        <div className="relative flex h-8 items-center">
          <div
            ref={tagsRef}
            className="flex gap-1 transition-transform ease-linear"
            style={{
              transitionDuration: tagsX ? "750ms" : "150ms",
              transform: `translateX(${tagsX}px)`,
            }}
          >
            <Badge>Professional</Badge>
            <Badge>Monochromatic</Badge>
            <Badge>Handwriting</Badge>
          </div>
          <div className="absolute right-8 h-full w-4 bg-gradient-to-l from-card via-card to-transparent" />
          <div className="absolute bottom-0 right-0 flex h-8 items-center gap-1 bg-card text-muted-foreground">
            <Typography variant="button">9</Typography>
            <HeartIcon width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
