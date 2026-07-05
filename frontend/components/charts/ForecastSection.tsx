"use client";

import { useEffect, useState } from "react";

import { getForecast } from "../../app/lib/api";
import ForecastChart from "./ForecastChart";

export default function ForecastSection() {
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    async function loadForecast() {
      const data = await getForecast();
      setForecast(data.forecast);
    }

    loadForecast();
  }, []);

  if (!forecast) {
    return (
      <div className="h-96 animate-pulse rounded-2xl bg-zinc-900" />
    );
  }

  return <ForecastChart data={forecast} />;
}