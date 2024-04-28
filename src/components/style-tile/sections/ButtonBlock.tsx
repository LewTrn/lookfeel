import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { strings } from "~/locales/generate";

export const ButtonBlock = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="input">{strings.styleTile.label.label}</Label>
        <Input
          id="input"
          placeholder={strings.styleTile.placeholder.placeholder}
        />
      </div>
      <div className="flex gap-4">
        <Button className="min-w-32">{strings.styleTile.primary.action}</Button>
        <Button className="min-w-32">
          {strings.styleTile.secondary.action}
        </Button>
      </div>
    </div>
  );
};
