import { Template } from "../template/Template";
import { type Theme } from "../theme/ThemeContext";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";

type LandingProps = {
  theme: Theme;
};

export const Landing = ({ theme }: LandingProps) => {
  return (
    <Template theme={theme}>
      <div className="flex w-full flex-col bg-background">
        <Hero />
        <Features />
      </div>
    </Template>
  );
};
