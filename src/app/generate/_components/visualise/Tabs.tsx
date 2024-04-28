import { Button } from "~/components/ui/button";

export const Tabs = () => {
  return (
    <div className="mb-6 flex gap-4">
      <Button variant="secondary">All</Button>
      <Button>Style tile</Button>
    </div>
  );
};
