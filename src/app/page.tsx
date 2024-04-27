import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

export default async function Home() {
  return (
    <main className="flex justify-center px-8">
      <div className="w-full max-w-screen-2xl">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
