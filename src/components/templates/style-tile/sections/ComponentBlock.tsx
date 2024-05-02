import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";

const WORDS = ["Energetic", "Harmony", "Positivity", "Fresh"];

export const ComponentBlock = () => {
  const { primary } = useGenerateStore((state) => state.palette);

  return (
    <div className="flex h-[540px] flex-col gap-4">
      <div className="flex shrink-0 flex-col overflow-clip rounded-lg bg-white shadow">
        <div style={{ backgroundColor: primary.baseColour }}>
          <img
            src="https://source.unsplash.com/blue-orange-and-yellow-wallpaper-E8Ufcyxz514"
            alt=""
            className="h-56 w-full object-cover mix-blend-luminosity"
          />
        </div>
        <div className="flex h-full flex-col p-4">
          <h4 className="font-semibold">Title</h4>
          <p className="text-sm">Description</p>
        </div>
      </div>
      <div className="h-full">
        <div
          className="flex flex-col items-center justify-center p-2 wh-full"
          style={{ color: primary.shades[950] }}
        >
          {WORDS.map((word, index) => (
            <span key={`${word}-${index}`} className="text-3xl font-medium">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
