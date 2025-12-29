import Link from "next/link";

export default function wow() {
  return (
    <div className="main-dev">
      <h1>Wow! This is the Wow Page</h1>

        <Link href="/mems">Go to Mems Page</Link>
        <Link href="/">Go Back Home</Link>
    </div>
  );
}