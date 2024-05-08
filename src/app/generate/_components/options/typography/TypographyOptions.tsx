import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
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

export const TypographyOptions = () => {
  const { heading, body } = useGenerateStore((state) => state.fonts);

  return (
    <div className="ml-2 flex flex-col gap-4">
      <Font font={heading.family} type="Heading" />
      <Font font={body.family} type="Body" />
    </div>
  );
};
