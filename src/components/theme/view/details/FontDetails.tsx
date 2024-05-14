import Typography from "~/components/ui/typography";
import { strings } from "~/locales/lookfeel";
import { type Fonts } from "~/types/Fonts";

type FontProps = {
  font: string;
  label: string;
};

const Font = ({ font, label }: FontProps) => {
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

type FontDetailsProps = {
  fonts: Fonts;
};

export const FontDetails = ({ fonts }: FontDetailsProps) => {
  const { heading, body } = fonts;

  return (
    <div className="ml-2 flex flex-col gap-4">
      <Font font={heading} label={strings.typography.heading.label} />
      <Font font={body} label={strings.typography.body.label} />
    </div>
  );
};
