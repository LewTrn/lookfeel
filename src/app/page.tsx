import { Discover } from "./_components/discover/Discover";
import { Header } from "./_components/header/Header";
import { Hero } from "./_components/Hero";

export default async function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-2xl px-8 pb-8">
      <Header />
      <div className="flex flex-col gap-16">
        <Hero />
        <Discover />
      </div>
    </main>
  );
}
