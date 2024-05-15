import { api } from "~/trpc/server";
import { makePalette } from "~/utils/colours/palette/makePalette";

import { ViewThemeHeader } from "./../_components/header/ViewThemeHeader";
import { ViewThemeContainer } from "./../_components/ViewThemeContainer";

export default async function Theme({ params }: { params: { id: string } }) {
  const data = await api.theme.getTheme({ id: params.id });

  // TODO: Handle theme not found
  if (!data) return null;

  const theme = {
    palette: makePalette(data.palette),
    fonts: data.fonts,
  };

  return (
    <main className="flex w-full flex-col">
      <ViewThemeHeader theme={theme} />
      <ViewThemeContainer theme={theme} />
    </main>
  );
}
