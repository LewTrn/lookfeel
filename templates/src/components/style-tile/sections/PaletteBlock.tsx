import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";

export const PaletteBlock = () => {
  const palette = useGenerateStore((state) => state.palette);

  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.values(palette).map(({ baseColour }, index) => (
        <div
          key={`${baseColour}-${index}`}
          className="aspect-square rounded-lg 2xl:aspect-auto 2xl:h-32"
          style={{ backgroundColor: baseColour }}
        />
      ))}
    </div>
  );
};
