const COLOURS = ["#99E1D9", "#705D56", "#70ABAF", "#32292F"];

export const PaletteBlock = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {COLOURS.map((colour, index) => (
        <div
          key={`${colour}-${index}`}
          className="h-16 rounded-sm"
          style={{ backgroundColor: colour }}
        />
      ))}
    </div>
  );
};
