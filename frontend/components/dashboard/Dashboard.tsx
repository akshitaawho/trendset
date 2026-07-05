"use client";

import { useEffect, useState } from "react";

import { getDashboardData } from "../../app/lib/api";

import { getForecast } from "@/app/lib/api";
import ForecastChart from "../charts/ForecastChart";
import Header from "../layout/Header";
import Filters from "../layout/Filters";
import KPISection from "../cards/KPISection";
import RevenueChart from "../charts/RevenueChart";
import CategoryChart from "../charts/CategoryChart";
import CountryChart from "../charts/CountryChart";
import TopProductsTable from "../charts/TopProductsTable";

export default function Dashboard() {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
    async function loadForecast() {
        const result = await getForecast();
        setForecast(result.forecast);
    }

    loadForecast();
    }, []);

    const [data, setData] = useState<any>(null);

    const [country, setCountry] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        async function loadDashboard() {
        const dashboard = await getDashboardData(country, category);
        setData(dashboard);
        }

        loadDashboard();
    }, [country, category]);

    if (!data) {
        return <p className="p-8 text-white">Loading...</p>;
    }

    return (
        <main className="min-h-screen bg-black p-8">
        <div className="mx-auto max-w-7xl space-y-8">

            <Header />

            <Filters
            onCountryChange={setCountry}
            onCategoryChange={setCategory}
            />

            <KPISection kpis={data.kpis} />

            <RevenueChart data={data.monthly_sales} />
            <ForecastChart data={forecast} />

            <div className="grid gap-8 lg:grid-cols-2">
            <CategoryChart data={data.category_sales} />
            <CountryChart data={data.country_sales} />
            </div>

            <TopProductsTable data={data.top_products} />

        </div>
        </main>
    );
}