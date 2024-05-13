import {
  DownloadIcon,
  EyeIcon,
  type LucideIcon,
  SwatchBookIcon,
} from "lucide-react";

type FeatureProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const Feature = ({ Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="mb-2 h-12 w-12 rounded-lg bg-accent p-2" />
      <h3
        className="text-lg font-semibold"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="flex flex-col gap-16 bg-accent/10 p-24 text-center">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold uppercase text-secondary">Features</h3>
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          All the themes
        </h2>
        <p className="text-lg">
          All the tools you need to theme your next project in seconds.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Feature
          Icon={SwatchBookIcon}
          title="Generate themes"
          description="Choose colours or randomise to generate themes in seconds."
        />
        <Feature
          Icon={EyeIcon}
          title="Preview visualizations"
          description="Visualise your themes with live previews on a variety of templates."
        />
        <Feature
          Icon={DownloadIcon}
          title="Export styles"
          description="Export your themes in various formats to use in your projects."
        />
      </div>
    </section>
  );
};
