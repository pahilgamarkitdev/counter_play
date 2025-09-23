'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Heroes</h1>
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2 text-red-300">Something went wrong!</h2>
            <p className="text-red-200 mb-4">
              Failed to load heroes. Please try again.
            </p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}