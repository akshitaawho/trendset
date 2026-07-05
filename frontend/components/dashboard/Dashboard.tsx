"use client";

import { useEffect, useState } from "react";

import { getDashboardData } from "../../app/lib/api";

import Header from "../layout/Header";
import KPISection from "../cards/KPISection";
import RevenueChart from "../charts/RevenueChart";
import CategoryChart from "../charts/CategoryChart";
import CountryChart from "../charts/CountryChart";
import TopProductsTable from "../charts/TopProductsTable";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const dashboard = await getDashboardData();
      setData(dashboard);
    }

    load();
  }, []);

  if (!data) {
    return <p className="p-8 text-white">Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <Header />

        <KPISection kpis={data.kpis} />

        <RevenueChart data={data.monthly_sales} />

        <div className="grid gap-8 lg:grid-cols-2">
          <CategoryChart data={data.category_sales} />
          <CountryChart data={data.country_sales} />
        </div>

        <TopProductsTable data={data.top_products} />

      </div>
    </main>
  );
}