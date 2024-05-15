import { api } from "~/trpc/server";
import { makePalette } from "~/utils/colours/palette/makePalette";

import { ViewThemeHeader } from "./../_components/header/ViewThemeHeader";
import { ViewThemeContainer } from "./../_components/ViewThemeContainer";

export default async function Theme({ params }: { params: { id: string } }) {
  const theme = await api.theme.getTheme({ id: params.id });

  // TODO: Handle theme not found
  if (!theme) return null;

  const palette = makePalette(theme.palette);

  return (
    <main className="flex w-full flex-col">
      <ViewThemeHeader />
      <ViewThemeContainer theme={{ palette, fonts: theme.fonts }} />
    </main>
  );
}
