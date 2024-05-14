import { DiscoverThemeCard } from "./DiscoverThemeCard";

export const ThemeListing = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <DiscoverThemeCard />
    </div>
  );
};
