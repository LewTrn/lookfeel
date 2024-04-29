import Typography from "~/components/ui/typography";

type FontProps = {
  font: string;
  type: string;
};

const Font = ({ font, type }: FontProps) => {
  return (
    <div>
      <div className="text-secondary">
        <Typography variant="h3">{type}</Typography>
      </div>
      <div className="text-3xl" style={{ fontFamily: font }}>
        {font}
      </div>
    </div>
  );
};

export const Fonts = () => {
  return (
    <div className="ml-2 flex flex-col gap-4">
      <Font font="Georgia" type="Heading" />
      <Font font="Arial" type="Body" />
    </div>
  );
};
