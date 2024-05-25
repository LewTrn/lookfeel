"use client";

import { useEffect, useState } from "react";

import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/landing";

export const Hero = () => {
  const [title, setTitle] = useState("generate");

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((title) => {
        switch (title) {
          case "generate":
            return "visualise";
          case "visualise":
            return "discover";
          case "discover":
            return "generate";
          default:
            return "generate";
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-96 w-full rounded-lg bg-gradient-to-tr from-neutral-200 to-background p-12">
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-full max-w-xl items-center">
          <h1 className="text-5xl font-medium">
            <span className="group relative font-semibold" data-title={title}>
              <span className="absolute -left-[6.5px] origin-left text-rose-500 opacity-0 transition-opacity duration-500 group-data-[title=generate]:opacity-100">
                Generate
              </span>
              <span className="absolute -left-[1px] text-indigo-500 opacity-0 transition-opacity duration-500 group-data-[title=visualise]:opacity-100">
                Visualise
              </span>
              <span className="absolute text-lime-500 opacity-0 transition-opacity duration-500 group-data-[title=discover]:opacity-100">
                Discover
              </span>
            </span>
            <span className="invisible font-semibold" aria-hidden>
              Discover
            </span>{" "}
            <span>{strings.hero.title}</span>
          </h1>
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
