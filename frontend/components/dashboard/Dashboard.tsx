import Header from "../layout/Header";
import KPISection from "../cards/KPISection";
import RevenueChart from "../charts/RevenueChart";

type DashboardProps = {
  data: {
    kpis: {
      revenue: number;
      profit: number;
      transactions: number;
      products: number;
      countries: number;
    };
    monthly_sales: Record<string, number>;
  };
};

export default function Dashboard({ data }: DashboardProps) {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <Header />

        <KPISection kpis={data.kpis} />

        <RevenueChart data={data.monthly_sales} />

      </div>
    </main>
  );
}