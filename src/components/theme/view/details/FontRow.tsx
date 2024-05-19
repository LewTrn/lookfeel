import Typography from "~/components/ui/typography";

type FontRowProps = {
  font: string;
  label: string;
};

export const FontRow = ({ font, label }: FontRowProps) => {
  return (
    <div>
      <div className="text-secondary">
        <Typography variant="h3">{label}</Typography>
      </div>
      <div className="text-3xl" style={{ fontFamily: font }}>
        {font}
      </div>
    </div>
  );
};
