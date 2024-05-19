import { Button } from "templates/components/ui/button";
import { Input } from "templates/components/ui/input";
import { Label } from "templates/components/ui/label";

import { strings } from "~/locales/lookfeel";

export const ButtonBlock = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="example">{strings.styleTile.label.label}</Label>
        <Input
          id="example"
          placeholder={strings.styleTile.placeholder.placeholder}
        />
      </div>
      <div className="flex gap-2">
        <Button className="w-32">{strings.styleTile.primary.action}</Button>
        <Button variant="secondary" className="w-32">
          {strings.styleTile.secondary.action}
        </Button>
      </div>
    </div>
  );
};
