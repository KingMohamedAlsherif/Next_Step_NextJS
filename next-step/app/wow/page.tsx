import Link from "next/link";

export default function wow() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
        Wow! This is the Wow Page
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/mems" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          Go to Mems Page
        </Link>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}