import Link from "next/link";

import { type Likes, type Theme } from "~/types/Theme";

import { ViewThemeActions } from "./ViewThemeActions";

type ViewThemeHeaderProps = {
  id: string;
  theme: Theme;
  likes: Likes;
};

export const ViewThemeHeader = ({ id, theme, likes }: ViewThemeHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between bg-background px-8">
      <Link href="/" className="text-2xl font-bold">
        lookfeel
      </Link>
      <ViewThemeActions id={id} theme={theme} likes={likes} />
    </header>
  );
};
