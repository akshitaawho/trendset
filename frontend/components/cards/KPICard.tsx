type Props = {
  title: string;
  value: number;
};

function formatValue(title: string, value: number) {
  if (title === "Revenue" || title === "Profit") {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }

  return value.toLocaleString();
}

export default function KPICard({ title, value }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-semibold text-white">
        {formatValue(title, value)}
      </h2>
    </div>
  );
}