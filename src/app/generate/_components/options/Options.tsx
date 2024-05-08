import { PaletteIcon, TypeIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";
import { GenerateMode } from "~/types/Mode";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { Colour } from "./colour/Colour";
import { TypographyOptions } from "./typography/TypographyOptions";

export const Options = () => {
  const mode = useGenerateStore((state) => state.mode);
  const setMode = useGenerateStore((state) => state.setMode);

  return (
    <div className="sticky top-20 flex flex-col gap-6">
      <Tabs
        defaultValue={mode}
        onValueChange={(mode) => setMode(mode as GenerateMode)}
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
          <Colour />
        </TabsContent>
        <TabsContent value={GenerateMode.Typography}>
          <TypographyOptions />
        </TabsContent>
      </Tabs>
    </div>
  );
};
