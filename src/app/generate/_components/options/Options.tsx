import { PaletteIcon, TypeIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";

import { Colour } from "./colour/Colour";
import { TypographyOptions } from "./typography/TypographyOptions";

export const Options = () => {
  return (
    <div className="sticky top-20 flex flex-col gap-6">
      <Tabs defaultValue="colour">
        <TabsList className="mb-6 w-full">
          <TabsTrigger
            value="colour"
            aria-label={strings.colour.title}
            className="w-full"
          >
            <PaletteIcon />
          </TabsTrigger>
          <TabsTrigger
            value="typography"
            aria-label={strings.typography.title}
            className="w-full"
          >
            <TypeIcon />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="colour">
          <Colour />
        </TabsContent>
        <TabsContent value="typography">
          <TypographyOptions />
        </TabsContent>
      </Tabs>
    </div>
  );
};
