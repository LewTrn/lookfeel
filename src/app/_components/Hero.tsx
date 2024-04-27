import { Button } from "~/components/ui/button";

import { strings } from "./locales";

export const Hero = () => {
  return (
    <section className="h-96 w-full rounded-xl bg-gradient-to-tr from-indigo-100 to-white p-12">
      <div className="flex h-full max-w-lg flex-col justify-end gap-8">
        <h1 className="my-4 text-5xl font-medium">{strings.hero.title}</h1>
        <div className="my-4">
          <Button size="lg">{strings.hero.generate.action}</Button>
        </div>
      </div>
    </section>
  );
};
