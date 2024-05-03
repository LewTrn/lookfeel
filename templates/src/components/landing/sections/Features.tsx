import { CpuIcon, LineChartIcon, ShieldIcon } from "lucide-react";

export const Features = () => {
  return (
    <section className="flex flex-col p-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-semibold">Harness the power of AI</h2>
        <p className="text-xl">
          Advanced features to help your business thrive
        </p>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-8">
        <div>
          <CpuIcon className="mb-2 h-12 w-12 rounded-lg bg-secondary p-2" />
          <h3 className="mb-1 font-semibold">Intelligent Automation</h3>
          <p>Streamline your workflows with our AI-powered automation tools.</p>
        </div>
        <div>
          <LineChartIcon className="mb-2 h-12 w-12 rounded-lg bg-secondary p-2" />
          <h3 className="mb-1 font-semibold">Predictive Analytics</h3>
          <p>
            Gain valuable insights and make data-driven decisions with our
            advanced analytics.
          </p>
        </div>
        <div>
          <ShieldIcon className="mb-2 h-12 w-12 rounded-lg bg-secondary p-2" />
          <h3 className="mb-1 font-semibold">Secure AI Solutions</h3>
          <p>
            Protect your data and ensure compliance with our robust security
            features.
          </p>
        </div>
      </div>
    </section>
  );
};
