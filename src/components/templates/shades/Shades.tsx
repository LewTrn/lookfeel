import { Swatch } from "./Swatch";

type ShadesProps = {
  colours: string[];
};

export const Shades = ({ colours }: ShadesProps) => {
  return (
    <div className="grid rounded-lg bg-popover p-8">
      {colours.map((colour, index) => (
        <Swatch key={index} baseColour={colour} />
      ))}
    </div>
  );
};
