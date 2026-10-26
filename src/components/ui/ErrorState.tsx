import Link from 'next/link';

interface ErrorStateProps {
  title?: string;
  message?: string;
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again later.',
}: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="text-center px-4">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-slate-50 mb-2">{title}</h1>
        <p className="text-slate-400 mb-8">{message}</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
