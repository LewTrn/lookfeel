import { HeartIcon } from "lucide-react";

import Typography from "~/components/ui/typography";

export type ThemeCardProps = {
  headingFont: string;
  bodyFont: string;
};

export const ThemeCard = ({ headingFont, bodyFont }: ThemeCardProps) => {
  return (
    <div className="group relative flex w-full flex-col rounded-lg border bg-card p-3 text-card-foreground">
      <div className="absolute inset-0 -z-10 scale-90 rounded-lg shadow transition-transform duration-300 wh-full group-hover:scale-100" />
      <div className="grid h-20 flex-shrink-0 grid-cols-4 overflow-hidden rounded-lg">
        <div className="bg-red-500 wh-full" />
        <div className="bg-blue-500 wh-full" />
        <div className="bg-pink-500 wh-full" />
        <div className="bg-yellow-500 wh-full" />
      </div>
      <div className="px-2">
        <div className="my-2 flex items-center gap-3">
          <Typography
            variant="h2"
            className="overflow-hidden whitespace-nowrap font-normal"
          >
            <span className="font-serif">{headingFont}</span>
            <span className="mx-1">•</span>
            <span>{bodyFont}</span>
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-red-200 to-blue-600" />
            <Typography variant="button">lookfeel</Typography>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Typography variant="button">9</Typography>
            <HeartIcon width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
