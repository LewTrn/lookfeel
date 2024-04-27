import { Hero } from "./_components/Hero";

export default async function Home() {
  return (
    <main className="flex justify-center p-8">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
