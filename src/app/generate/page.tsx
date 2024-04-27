import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";

export default async function Generate() {
  return (
    <main className="px-8">
      <div className="flex w-full max-w-screen-2xl gap-8">
        <div className="w-96">
          <Options />
        </div>
        <div className="w-full">
          <Visualise />
        </div>
      </div>
    </main>
  );
}
