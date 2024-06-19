import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="font-bold text-4xl">Welcome to my blog</h1>
      <Link className="underline" href="/posts">
        View Posts
      </Link>
    </main>
  );
}
