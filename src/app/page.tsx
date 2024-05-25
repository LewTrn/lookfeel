import { Discover } from "./_components/discover/Discover";
import { Header } from "./_components/header/Header";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-2xl px-4 pb-4 md:px-8 md:pb-8">
      <Header />
      <div className="flex flex-col gap-8 md:gap-16">
        <Hero />
        <Discover />
      </div>
    </main>
  );
}
