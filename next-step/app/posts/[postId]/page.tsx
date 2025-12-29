export default async function PostDetailsPage({ params }: { params: { postId: string } }) {
    const postId = params.postId;
    const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      }
    }
  );
    const post = await result.json();
    console.log(`==============${params.postId}================`);
    return (
    <div className="main-dev">
      <h1>Welcome to the Post Details Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}