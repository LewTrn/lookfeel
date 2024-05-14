import { ViewThemeHeader } from "./_components/header/ViewThemeHeader";
import { ViewThemeContainer } from "./_components/ViewThemeContainer";

export default async function Theme() {
  return (
    <main className="flex w-full flex-col">
      <ViewThemeHeader />
      <ViewThemeContainer />
    </main>
  );
}
