import { ChevronDownIcon } from "lucide-react";

import Typography from "~/components/ui/typography";

import { Fonts } from "./Fonts";
import { Header } from "./Header";
import { Palette } from "./Palette";

export const Options = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-lg bg-accent px-4 py-2">
          <Typography variant="h3" className="mb-0">
            Style Tile
          </Typography>
          <ChevronDownIcon height={20} width={20} />
        </div>
        <Palette />
        <Fonts />
      </div>
    </div>
  );
};
