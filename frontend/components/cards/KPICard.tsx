type Props = {
  title: string;
  value: number;
};

export default function KPICard({ title, value }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-semibold text-white">
        {value.toLocaleString()}
      </h2>

    </div>
  );
}