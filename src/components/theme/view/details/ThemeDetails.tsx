import { PaletteIcon, TypeIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/lookfeel";
import { GenerateMode } from "~/types/Mode";
import { type Theme } from "~/types/Theme";

import { FontDetails } from "./FontDetails";
import { PaletteDetails } from "./PaletteDetails";

type ThemeDetailsProps = {
  theme: Theme;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const ThemeDetails = ({
  theme,
  defaultValue,
  onValueChange,
}: ThemeDetailsProps) => {
  return (
    <div className="sticky top-20 flex flex-col gap-6">
      <Tabs defaultValue={defaultValue} onValueChange={onValueChange}>
        <TabsList className="mb-6 w-full">
          <TabsTrigger
            value={GenerateMode.Colour}
            aria-label={strings.colour.title}
            className="w-full"
          >
            <PaletteIcon />
          </TabsTrigger>
          <TabsTrigger
            value={GenerateMode.Typography}
            aria-label={strings.typography.title}
            className="w-full"
          >
            <TypeIcon />
          </TabsTrigger>
        </TabsList>
        <TabsContent value={GenerateMode.Colour}>
          <PaletteDetails palette={theme.palette} />
        </TabsContent>
        <TabsContent value={GenerateMode.Typography}>
          <FontDetails fonts={theme.fonts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
