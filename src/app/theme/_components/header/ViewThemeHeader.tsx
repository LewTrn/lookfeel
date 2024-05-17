import Link from "next/link";

import { type Theme } from "~/types/Theme";

import { ViewThemeActions } from "./ViewThemeActions";

type ViewThemeHeaderProps = {
  id: string;
  theme: Theme;
};

export const ViewThemeHeader = ({ id, theme }: ViewThemeHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between bg-background px-8">
      <Link href="/" className="text-2xl font-bold">
        lookfeel
      </Link>
      <ViewThemeActions id={id} theme={theme} />
    </header>
  );
};
