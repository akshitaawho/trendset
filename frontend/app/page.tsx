import { getDashboardData } from "./lib/api";
import Dashboard from "../components/dashboard/Dashboard";

export default async function Home() {
  const data = await getDashboardData();

  return <Dashboard data={data} />;
}