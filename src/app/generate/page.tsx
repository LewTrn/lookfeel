import { Options } from "./_components/options/Options";
import { Visualise } from "./_components/visualise/Visualise";

export default async function Generate() {
  return (
    <main className="flex w-full">
      <div className="fixed -z-10 h-screen w-screen bg-teal-50" />
      <div className="h-screen w-96 border-r bg-background px-8">
        <Options />
      </div>
      <div className="w-full px-8">
        <Visualise />
      </div>
    </main>
  );
}
