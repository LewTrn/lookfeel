import Typography from "~/components/ui/typography";
import { TYPOGRAPHY_HEADINGS } from "~/constants/fonts";
import { type Typography as TypographyType } from "~/types/Fonts";

type FontRowProps = {
  font: string;
  typographyType: TypographyType;
};

export const FontRow = ({ font, typographyType }: FontRowProps) => {
  return (
    <div>
      <div className="text-secondary">
        <Typography variant="h3">
          {TYPOGRAPHY_HEADINGS[typographyType]}
        </Typography>
      </div>
      <div className="text-3xl" style={{ fontFamily: font }}>
        {font}
      </div>
    </div>
  );
};
