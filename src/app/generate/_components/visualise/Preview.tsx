import { StyleTile } from "~/components/style-tile/StyleTile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { strings } from "~/locales/generate";

export const Preview = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">
            {strings.visualise.preview.all.action}
          </TabsTrigger>
          <TabsTrigger value="tile">
            {strings.visualise.preview.styleTile.action}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" />
        <TabsContent value="tile">
          <StyleTile />
        </TabsContent>
      </Tabs>
    </div>
  );
};
