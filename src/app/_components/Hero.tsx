"use client";

import { ExternalLinkIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeCard } from "~/components/theme/ThemeCard";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/landing";

const themeId = "6i8jMlCG5zEP";
const palette = {
  primary: "#005f70",
  secondary: "#b30c00",
  accent: "#ffe8bf",
  neutral: "#1b2122",
};
const { primary, secondary, accent } = palette;
const fonts = {
  heading: "Gelasio",
  body: "Quattrocento",
};
const tags = ["Retro", "3 Colors", "Serif"];

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
    <section className="flex h-64 w-full justify-between gap-4 rounded-lg bg-gradient-to-tr from-neutral-200 to-background p-6 md:h-96 md:p-12">
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-full max-w-xl items-center">
          <h1 className="text-3xl font-medium md:text-5xl">
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
      <div
        className="hidden h-full flex-col items-center justify-center gap-4 rounded-lg px-20 md:flex"
        style={{
          background: `linear-gradient(45deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
        }}
      >
        <div className="flex w-80 flex-col gap-4 pt-4">
          <ThemeCard palette={palette} fonts={fonts} tags={tags} />
        </div>
        <LinkButton
          href={`/theme/${themeId}`}
          variant="tint"
          Icon={ExternalLinkIcon}
          className="w-full"
          asAnchor
        >
          {strings.hero.featured.action}
        </LinkButton>
      </div>
    </section>
  );
};
