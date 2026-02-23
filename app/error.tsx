"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-light">Something went wrong</h1>
      <p className="text-zinc-400 text-sm max-w-md">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-none px-8 py-4 font-light tracking-widest uppercase text-xs border border-current hover:bg-white hover:text-black transition-all duration-500"
      >
        Try Again
      </button>
    </div>
  );
}
