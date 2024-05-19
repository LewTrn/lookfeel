import { api } from "~/trpc/server";
import { type Fonts } from "~/types/Fonts";
import { type BaseColours } from "~/types/Palette";
import { type Likes } from "~/types/Theme";
import { makePalette } from "~/utils/colours/palette/makePalette";

import { ViewThemeHeader } from "./../_components/header/ViewThemeHeader";
import { ViewThemeContainer } from "./../_components/ViewThemeContainer";

export default async function Theme({ params }: { params: { id: string } }) {
  const data = await api.theme.getTheme({ id: params.id });

  // TODO: Handle theme not found
  if (!data) return null;

  const theme = {
    palette: makePalette(data.palette as BaseColours),
    fonts: data.fonts as Fonts,
  };
  const likes = {
    liked: data.liked,
    likeCount: data.like_count,
  } as Likes;

  return (
    <main className="flex w-full flex-col">
      <ViewThemeHeader id={params.id} theme={theme} likes={likes} />
      <ViewThemeContainer theme={theme} />
    </main>
  );
}
