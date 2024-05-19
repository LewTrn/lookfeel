import { PaletteIcon, TypeIcon } from "lucide-react";
import { type ComponentProps } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/lookfeel";
import { GenerateMode } from "~/types/Mode";
import { type Theme } from "~/types/Theme";

import { FontDetails } from "./FontDetails";
import { PaletteDetails } from "./PaletteDetails";

type ThemeDetailsTabsProps = {
  theme: Theme;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  CustomColourRow?: ComponentProps<typeof PaletteDetails>["CustomColourRow"];
  CustomFontRow?: ComponentProps<typeof FontDetails>["CustomFontRow"];
};

export const ThemeDetailsTabs = ({
  theme,
  defaultValue,
  onValueChange,
  CustomColourRow,
  CustomFontRow,
}: ThemeDetailsTabsProps) => {
  return (
    <div className="sticky top-20 flex flex-col gap-6">
      <Tabs
        defaultValue={defaultValue ?? GenerateMode.Colour}
        onValueChange={onValueChange}
      >
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
          <PaletteDetails
            palette={theme.palette}
            CustomColourRow={CustomColourRow}
          />
        </TabsContent>
        <TabsContent value={GenerateMode.Typography}>
          <FontDetails fonts={theme.fonts} CustomFontRow={CustomFontRow} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
