import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import { Template } from "../template/Template";
import { type ThemeProviderTheme } from "../theme/types";
import { CssCodeBlock } from "./CssCodeBlock";
import { ShadcnCodeBlock } from "./ShadcnCodeBlock";
import { TailwindCodeBlock } from "./TailwindCodeBlock";

type LandingProps = {
  theme: Required<ThemeProviderTheme>;
};

export const Export = ({ theme }: LandingProps) => {
  return (
    <Template>
      <div className="flex w-full flex-col bg-background p-8">
        <Tabs defaultValue="css">
          <TabsList className="mb-6">
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
            <TabsTrigger value="shadcn">shadcn/ui</TabsTrigger>
          </TabsList>
          <TabsContent value="css">
            <CssCodeBlock theme={theme} />
          </TabsContent>
          <TabsContent value="tailwind">
            <TailwindCodeBlock theme={theme} />
          </TabsContent>
          <TabsContent value="shadcn">
            <ShadcnCodeBlock theme={theme} />
          </TabsContent>
        </Tabs>
      </div>
    </Template>
  );
};
