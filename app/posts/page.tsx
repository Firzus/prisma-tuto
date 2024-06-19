import Link from "next/link";
import prisma from "@lib/db";
import createPost from "@actions/actions";

export default async function PostsPage() {
  // const posts = await prisma.post.findMany();

  const user = await prisma.user.findUnique({
    where: {
      email: "lprieu@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  const postCount = prisma.post.count();

  return (
    <main className="h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="font-semibold text-3xl">All posts ({postCount})</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {user.posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm bg-green-200"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm bg-green-200"
        />
        <button
          type="submit"
          className="bg-green-500 py-2 text-white rounded-sm"
        >
          Create Post
        </button>
      </form>
    </main>
  );
}
