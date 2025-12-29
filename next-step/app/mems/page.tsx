import Link from "next/link";

export default async function Mems() {
  const result = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      next: {
        revalidate: 60,
      }
    }
  );
  const posts = await result.json()
  console.log(posts);
  const postsJSX = posts.map((post: { id: number; title: string; body: string }) => {
    return (
      <Link href={`/mems/${post.id}`} key={post.id} className="block group">
        <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors capitalize">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {post.body}
            </p>
        </div>
      </Link>
    )
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Mems Collection
        </h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
          Explore our latest collection of generated posts.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {postsJSX}
      </div>
    </div>
  );
}