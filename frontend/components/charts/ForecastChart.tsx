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

type ForecastItem = {
  date: string;
  predicted_revenue: number;
};

type Props = {
  data: ForecastItem[];
};

export default function ForecastChart({ data }: Props) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        30-Day Revenue Forecast
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />

          <XAxis
            dataKey="date"
            tick={{ fill: "#aaa", fontSize: 12 }}
          />

          <YAxis
            tick={{ fill: "#aaa" }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="predicted_revenue"
            stroke="#60a5fa"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}