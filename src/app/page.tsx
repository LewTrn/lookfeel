import { Discover } from "./_components/discover/Discover";
import { Header } from "./_components/header/Header";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-2xl">
      <a
        className="block w-full bg-secondary p-4 text-center text-primary-foreground hover:underline focus-visible:underline"
        href="https://www.edgedb.com/blog/announcing-the-winners-of-our-hackathon"
        target="_blank"
      >
        2nd place winner of the EdgeDB Hackathon 🎉 Learn more about it here.
      </a>
      <div className="px-4 pb-4 md:px-8 md:pb-8">
        <Header />
        <div className="flex flex-col gap-8 md:gap-16">
          <Hero />
          <Discover />
        </div>
      </div>
    </main>
  );
}
