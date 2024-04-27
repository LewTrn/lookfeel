import { Button } from "~/components/ui/button";
import { strings } from "~/locales/generate";

export const Header = () => {
  return (
    <div className="mb-4 flex h-16 items-center justify-between px-2">
      {/* TODO: Use typography component */}
      <div>Press spacebar to generate</div>
      <div className="flex gap-4">
        <Button variant="ghost">
          {strings.visualise.header.preview.action}
        </Button>
        <Button>{strings.visualise.header.publish.action}</Button>
      </div>
    </div>
  );
};
