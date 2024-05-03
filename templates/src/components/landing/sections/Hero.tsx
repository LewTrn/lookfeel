import { Button } from "templates/components/ui/button";

import { NavHeader } from "./NavHeader";

export const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center px-8 pb-32">
      <NavHeader />
      <div className="mt-32 max-w-xl text-center text-6xl font-bold">
        <h1>Unlock the power of AI-driven insights</h1>
      </div>
      <div className="mt-16 max-w-lg text-center text-lg">
        <p>
          Streamline your workflows and boost productivity. Say goodbye to
          manual tasks and hello to effortless efficiency.
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <Button size="lg">Request a demo</Button>
        <Button variant="ghost" size="lg">
          Learn more
        </Button>
      </div>
    </section>
  );
};
