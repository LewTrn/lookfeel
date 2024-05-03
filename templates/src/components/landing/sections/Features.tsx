import {
  CpuIcon,
  LineChartIcon,
  type LucideIcon,
  ShieldIcon,
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
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="flex flex-col gap-16 bg-secondary/10 px-24 py-16 text-center">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold uppercase text-secondary">Features</h3>
        <h2 className="text-4xl font-bold">Harness the power of AI</h2>
        <p className="text-lg">
          Advanced features to help your business thrive
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Feature
          Icon={CpuIcon}
          title="Intelligent Automation"
          description="Streamline your workflows with our AI-powered automation tools."
        />
        <Feature
          Icon={LineChartIcon}
          title="Predictive Analytics"
          description="Gain valuable insights and make data-driven decisions with our advanced analytics."
        />
        <Feature
          Icon={ShieldIcon}
          title="Secure AI Solutions"
          description="Protect your data and ensure compliance with our robust security features."
        />
      </div>
    </section>
  );
};
