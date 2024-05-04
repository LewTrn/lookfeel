import {
  CpuIcon,
  FolderDotIcon,
  GraduationCapIcon,
  type LucideIcon,
} from "lucide-react";

type FeatureProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const Feature = ({ Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Icon className="mb-2 h-12 w-12 rounded-lg bg-accent p-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="flex flex-col gap-16 p-24">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="font-bold uppercase text-secondary">Features</h3>
        <h2 className="text-4xl font-bold">Features that spark joy</h2>
        <p className="text-lg">
          Fun-packed features you&apos;ll find in the AI Playground
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Feature
          Icon={CpuIcon}
          title="Interactive AI Models"
          description="Play around with a variety of AI models. No PhD required - jump right in, whether you're starting out or leveling up."
        />
        <Feature
          Icon={FolderDotIcon}
          title="Customizable Projects"
          description="Got a wild idea? Bring it to life with our flexible platform, from start to finish or using our pre-made templates."
        />
        <Feature
          Icon={GraduationCapIcon}
          title="Educational Resources"
          description="Learn, laugh, and level up your skills with our super user-friendly tutorials and guides."
        />
      </div>
    </section>
  );
};
