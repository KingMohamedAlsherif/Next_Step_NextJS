import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        Hello <span className="text-indigo-600 dark:text-indigo-400">Mom</span>
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
        Welcome to the NextStep application. This is a simple demonstration of Next.js with a clean and modern design.
      </p>
    </div>
  );
}
