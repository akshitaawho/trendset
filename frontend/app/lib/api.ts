const API_URL = "http://127.0.0.1:8000";

export async function getDashboardData() {
    const response = await fetch(`${API_URL}/dashboard/overview`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    return response.json();
}