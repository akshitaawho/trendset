export default function LoadingSkeleton() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">

        <div className="h-10 w-64 rounded bg-zinc-800" />

        <div className="flex gap-4">
          <div className="h-12 w-52 rounded bg-zinc-800" />
          <div className="h-12 w-52 rounded bg-zinc-800" />
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-28 rounded-2xl bg-zinc-800" />
          ))}
        </div>

        <div className="h-96 rounded-2xl bg-zinc-800" />

        <div className="h-96 rounded-2xl bg-zinc-800" />

      </div>
    </main>
  );
}