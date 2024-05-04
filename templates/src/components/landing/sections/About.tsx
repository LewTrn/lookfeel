import { Button } from "templates/components/ui/button";

export const About = () => {
  return (
    <section className="flex flex-col gap-16 p-8 text-center">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-primary/10 p-16">
        <h3 className="font-semibold uppercase text-secondary">About</h3>
        <h2 className="text-4xl font-bold">Made for makers</h2>
        <div className="max-w-md">
          <p className="text-lg">
            Generated a cool theme? Or have a feature request? Follow
            @lookfeelio and suggest your themes and ideas.
          </p>
        </div>
        <div className="mt-4">
          <Button asChild>
            <a href="https://twitter.com/lookfeelio" target="_blank">
              Follow @lookfeelio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
