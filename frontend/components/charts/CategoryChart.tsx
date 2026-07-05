"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: Record<string, number>;
};

const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

export default function CategoryChart({ data }: Props) {
  const chartData = Object.entries(data).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Sales by Category
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label={({ name, percent }) =>
                    `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
                }
                >
                {chartData.map((_, index) => (
                    <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>

            <Tooltip
                formatter={(value) => [
                    `$${(Number(value) / 1_000_000).toFixed(2)}M`,
                    "Revenue",
                ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}