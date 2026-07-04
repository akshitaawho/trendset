import { getDashboardData } from "./lib/api";

export default async function Home() {
    const data = await getDashboardData();

    return (
        <main className="p-8">
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </main>
    );
}