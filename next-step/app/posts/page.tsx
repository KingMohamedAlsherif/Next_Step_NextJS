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
  const postsJSX = posts.map((post: { title: string; body: string }) => {
    return (
      <div
      style={{
        width: "70%",
        marginTop: '20px', 
        background: "white",
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "10px",
        color: "black",
      }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  });

  return (
    <div className="main-dev">
      <h1>Welcome to the Mems Page</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {postsJSX}
        </div>

    </div>
  );
}