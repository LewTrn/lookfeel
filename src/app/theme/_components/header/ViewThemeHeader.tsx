import Link from "next/link";

import { EditThemeButton } from "~/app/@themeDrawer/(.)theme/[id]/_components/EditThemeButton";
import { type Theme } from "~/types/Theme";

type ViewThemeHeaderProps = {
  theme: Theme;
};

export const ViewThemeHeader = ({ theme }: ViewThemeHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between bg-background px-8">
      <Link href="/" className="text-2xl font-bold">
        lookfeel
      </Link>
      <EditThemeButton theme={theme} />
    </header>
  );
};
