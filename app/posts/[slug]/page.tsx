import prisma from "@lib/db";

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="font-semibold text-4xl">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
