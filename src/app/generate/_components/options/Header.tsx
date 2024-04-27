import Link from "next/link";

export const Header = () => {
  return (
    <div className="mb-4 ml-2 flex h-16 items-center">
      <Link href="/">
        <div className="text-2xl font-bold">lookfeel</div>
      </Link>
    </div>
  );
};
