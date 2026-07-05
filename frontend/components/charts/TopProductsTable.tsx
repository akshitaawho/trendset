type Props = {
  data: Record<string, number>;
};

export default function TopProductsTable({ data }: Props) {
  const products = Object.entries(data);

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
              className="border-b border-gray-800 hover:bg-gray-800/50"
            >
              <td className="py-3 text-gray-200">
                {id}
              </td>

              <td className="py-3 text-right text-gray-200">
                {Number(profit).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}