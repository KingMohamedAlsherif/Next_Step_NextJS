export default async function PostDetailsPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;
    const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      }
    }
  );
    const post = await result.json();
    console.log(`==============${postId}================`);
    return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mt-8">
      <div className="mb-6 border-b border-gray-100 dark:border-gray-700 pb-6">
        <h1 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">
          Post Details
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
          {post.title}
        </h2>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.body}
        </p>
      </div>
    </div>
  );
}