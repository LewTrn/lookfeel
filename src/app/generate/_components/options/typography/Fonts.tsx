type FontProps = {
  font: string;
  type: string;
};

const Font = ({ font, type }: FontProps) => {
  return (
    <div
      className="flex flex-col rounded-lg bg-card p-4 shadow"
      style={{ fontFamily: font }}
    >
      <div className="text-2xl">{font}</div>
      <div>{type}</div>
    </div>
  );
};

export const Fonts = () => {
  return (
    <div className="flex flex-col gap-2">
      <Font font="Georgia" type="Heading" />
      <Font font="Arial" type="Body" />
    </div>
  );
};
