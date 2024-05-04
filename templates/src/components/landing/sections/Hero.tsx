import { Button } from "templates/components/ui/button";

import { NavHeader } from "./NavHeader";

export const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center px-8 pb-32">
      <NavHeader />
      <div className="mt-32 max-w-xl text-center text-6xl font-bold">
        <h1>Spark creativity with next generation AI</h1>
      </div>
      <div className="mt-16 max-w-lg text-center text-lg">
        <p>
          Dive into an innovative world where technology meets imagination –
          Start your AI journey today!
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <Button size="lg">Get started</Button>
        <Button variant="secondary" size="lg">
          Learn more
        </Button>
      </div>
    </section>
  );
};
