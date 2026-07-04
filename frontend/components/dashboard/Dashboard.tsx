import Header from "../layout/Header";
import KPISection from "../cards/KPISection";
import RevenueChart from "../charts/RevenueChart";
import CategoryChart from "../charts/CategoryChart";

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
    category_sales: Record<string, number>;
  };
};

export default function Dashboard({ data }: DashboardProps) {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <Header />

        <KPISection kpis={data.kpis} />

        <RevenueChart data={data.monthly_sales} />

        <div className="grid gap-8 lg:grid-cols-2">
            <CategoryChart data={data.category_sales} />
        </div>

      </div>
    </main>
  );
}