import { Template } from "../template/Template";
import { type ThemeProviderTheme } from "../theme/types";
import { About } from "./sections/About";
import { Discover } from "./sections/Discover";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";

type LandingProps = {
  theme: ThemeProviderTheme;
};

export const Landing = ({ theme }: LandingProps) => {
  return (
    <Template theme={theme}>
      <div className="flex w-full flex-col bg-background">
        <Hero />
        <Features />
        <Discover />
        <About />
        <Footer />
      </div>
    </Template>
  );
};
