import Header from "../layout/Header";
import KPISection from "../cards/KPISection";

type Props = {
  data: {
    kpis: {
      revenue: number;
      profit: number;
      transactions: number;
      products: number;
      countries: number;
    };
  };
};

export default function Dashboard({ data }: Props) {
  return (
    <main className="min-h-screen bg-black px-10 py-8">
      <div className="mx-auto max-w-7xl">

        <Header />

        <KPISection kpis={data.kpis} />

      </div>
    </main>
  );
}