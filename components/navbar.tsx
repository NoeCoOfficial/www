import Link from "next/link";

export function Navbar() {
  return (
    <div className="container mx-auto p-3 px-5 font-bold text-md flex flex-row gap-5">
      <Link href="/">Noe Co.</Link>
      <div className="grow"></div>
      <Link href="/">Home</Link>
      <Link href="/games">Games</Link>
      <Link href="/about">About</Link>
      <Link href="/privacy">Privacy</Link>
    </div>
  );
}
