import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/landing";

export const Hero = () => {
  return (
    <section className="h-96 w-full rounded-lg bg-gradient-to-tr from-neutral-200 to-background p-12">
      <div className="flex h-full max-w-xl flex-col gap-4">
        <div className="flex h-full items-center">
          <h1 className="text-5xl font-medium">{strings.hero.title}</h1>
        </div>
        <div>
          <LinkButton href="/generate" size="lg">
            {strings.hero.generate.action}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
