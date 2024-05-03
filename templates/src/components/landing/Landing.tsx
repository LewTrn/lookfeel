import { Template } from "../template/Template";
import { type Theme } from "../theme/ThemeContext";
import { Hero } from "./sections/Hero";

type LandingProps = {
  theme: Theme;
};

export const Landing = ({ theme }: LandingProps) => {
  return (
    <Template theme={theme}>
      <div className="flex h-20 w-full flex-col bg-background">
        <Hero />
      </div>
    </Template>
  );
};
