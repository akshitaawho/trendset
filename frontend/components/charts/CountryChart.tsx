"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  data: Record<string, number>;
};

export default function CountryChart({ data }: Props) {
  const chartData = Object.entries(data).map(([country, sales]) => ({
    country,
    sales,
  }));

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Sales by Country
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid stroke="#333" strokeDasharray="3 3" />

            <XAxis
              dataKey="country"
              angle={-25}
              textAnchor="end"
              interval={0}
              height={60}
              tick={{ fill: "#aaa", fontSize: 12 }}
            />

            <YAxis
              tick={{ fill: "#aaa" }}
              tickFormatter={(value) =>
                `${(Number(value) / 1_000_000).toFixed(0)}M`
              }
            />

            <Tooltip
              formatter={(value) => [
                `$${(Number(value) / 1_000_000).toFixed(2)}M`,
                "Revenue",
              ]}
            />

            <Bar
              dataKey="sales"
              fill="#10b981"
              radius={[6, 6, 0, 0]}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}