import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import Typography from "~/components/ui/typography";
import { strings } from "~/locales/generate";

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

export const TypographyOptions = () => {
  const { heading, body } = useGenerateStore((state) => state.fonts);

  return (
    <div className="ml-2 flex flex-col gap-4">
      <Font font={heading} label={strings.typography.heading.label} />
      <Font font={body} label={strings.typography.body.label} />
    </div>
  );
};
