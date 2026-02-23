export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-light">Page Not Found</h1>
      <p className="text-zinc-400 text-sm">
        The page you are looking for doesn&apos;t exist. Return to the home page.
      </p>
      <a
        href="/"
        className="rounded-none px-8 py-4 font-light tracking-widest uppercase text-xs border border-current hover:bg-white hover:text-black transition-all duration-500"
      >
        Back to Home
      </a>
    </div>
  );
}
