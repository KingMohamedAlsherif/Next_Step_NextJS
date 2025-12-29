export default function LoadingPostDetails() {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mt-8 animate-pulse">
        <div className="mb-6 border-b border-gray-100 dark:border-gray-700 pb-6">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-2"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        </div>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    );
  } 
