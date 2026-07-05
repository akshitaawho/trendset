type Props = {
  data: Record<string, number>;
};

function formatProfit(value: number) {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }

  return `$${value.toFixed(2)}`;
}

export default function TopProductsTable({ data }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Top Products by Profit
      </h2>

      <table className="w-full text-left">
        <thead className="border-b border-zinc-700 text-zinc-400">
          <tr>
            <th className="pb-3">Product ID</th>
            <th className="pb-3 text-right">Profit</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(data).map(([id, profit]) => (
            <tr
              key={id}
              className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50"
            >
              <td className="py-3 text-gray-200">
                #{id}
              </td>

              <td className="py-3 text-right font-medium text-gray-200">
                {formatProfit(profit)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}