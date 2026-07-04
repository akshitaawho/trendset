import KPICard from "./KPICard";

type Props = {
  kpis: {
    revenue: number;
    profit: number;
    transactions: number;
    products: number;
    countries: number;
  };
};

export default function KPISection({ kpis }: Props) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      <KPICard title="Revenue" value={kpis.revenue} />
      <KPICard title="Profit" value={kpis.profit} />
      <KPICard title="Transactions" value={kpis.transactions} />
      <KPICard title="Products" value={kpis.products} />
      <KPICard title="Countries" value={kpis.countries} />

    </section>
  );
}