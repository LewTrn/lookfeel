import { Button } from "templates/components/ui/button";

export const Discover = () => {
  return (
    <section className="flex flex-col gap-16 p-24">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold uppercase text-secondary">Discover</h3>
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          Get inspired
        </h2>
        <div className="max-w-lg">
          <p className="text-lg">
            Discover trending themes and find design inspiration for your next
            project. Found a theme you like? Add your own colours and make it
            your own.
          </p>
        </div>
        <div className="mt-4">
          <Button variant="secondary">Discover themes</Button>
        </div>
      </div>
    </section>
  );
};
