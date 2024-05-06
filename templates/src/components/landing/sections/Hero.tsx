import { Button } from "templates/components/ui/button";

import { Header } from "./Header";

export const Hero = () => {
  return (
    <section className="w-full px-8 pb-32">
      <Header />
      <div className="mt-32 flex flex-col items-center">
        <div className="mb-8 rounded-full bg-accent px-3 py-1 text-sm">
          Part of the EdgeDB hackathon.{" "}
          <a
            href="https://hackathon.edgedb.com/"
            className="font-semibold hover:underline focus-visible:underline"
            target="_blank"
          >
            Read more
          </a>
        </div>
        <div className="max-w-xl text-center text-6xl font-bold">
          <h1>Beautiful UI themes for your next project</h1>
        </div>
        <div className="mt-16 max-w-lg text-center text-lg">
          <p>
            Generate custom UI themes, visualize with real layouts and discover
            trending designs from the community.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Button size="lg">Get started</Button>
          <Button variant="outline" size="lg">
            Discover themes
          </Button>
        </div>
      </div>
    </section>
  );
};
