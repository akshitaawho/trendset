"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  data: Record<string, number>;
};

export default function RevenueChart({ data }: Props) {
  const chartData = Object.entries(data).map(([month, revenue]) => ({
    month,
    revenue,
  }));

  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Monthly Revenue
      </h2>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#333" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis
                tick={{ fill: "#aaa" }}
                tickFormatter={(value) => `${(Number(value) / 1_000_000).toFixed(0)}M`}
            />
            <Tooltip
                formatter={(value) => [
                    `$${(Number(value) / 1_000_000).toFixed(2)}M`,
                    "Revenue",
                ]}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#60a5fa"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}