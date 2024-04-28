import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";

export default async function Generate() {
  return (
    <main className="flex w-full max-w-screen-2xl gap-10 px-8">
      <div className="h-screen w-96 border-r pr-8">
        <Options />
      </div>
      <div className="w-full">
        <Visualise />
      </div>
    </main>
  );
}
