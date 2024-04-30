import { createSwatch } from "./swatch/createSwatch";

type SwatchProps = {
  baseColour: string;
};

export const Swatch = ({ baseColour }: SwatchProps) => {
  const swatch = createSwatch({
    colour: baseColour,
    stop: 500,
    saturation: 0,
    lMin: 15,
    lMax: 100,
  });

  return (
    <div className="flex">
      {swatch.map(({ hex }, index) => {
        return (
          <div
            key={`${hex}-${index}`}
            className="h-10 w-10"
            style={{ backgroundColor: hex }}
          />
        );
      })}
    </div>
  );
};
