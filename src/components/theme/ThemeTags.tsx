import { HeartIcon } from "lucide-react";
import { forwardRef } from "react";

import { Badge } from "../ui/badge";
import Typography from "../ui/typography";

type ThemeTagsProps = {
  tags: string[];
  translateX: number;
  showLikes?: boolean;
  likeCount?: number;
  liked?: boolean;
};

export const ThemeTags = forwardRef<HTMLDivElement, ThemeTagsProps>(
  ({ tags, translateX, showLikes, likeCount = 0, liked = false }, ref) => {
    return (
      <div className="relative flex h-8 items-center">
        <div
          ref={ref}
          className="flex gap-1 transition-transform ease-linear"
          style={
            showLikes
              ? {
                  transitionDuration: translateX ? "750ms" : "150ms",
                  transform: `translateX(${translateX}px)`,
                }
              : {}
          }
        >
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {showLikes && (
          <>
            <div className="absolute -left-4 h-full w-4 bg-gradient-to-r from-card via-card to-transparent" />
            <div className="absolute right-8 h-full w-8 bg-gradient-to-l from-card via-card to-transparent" />
            <div className="absolute -right-4 bottom-0 flex h-8 items-center gap-1 bg-card pr-4">
              <Typography variant="button">{likeCount}</Typography>
              <HeartIcon
                width={20}
                height={20}
                fill={liked ? "#171717" : "none"}
              />
            </div>
          </>
        )}
      </div>
    );
  },
);

ThemeTags.displayName = "ThemeTags";
