const API_URL = "http://127.0.0.1:8000";

export async function getDashboardData() {
  const res = await fetch(`${API_URL}/dashboard/overview`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch dashboard");

  return res.json();
}

export async function getFilters() {
  const response = await fetch("http://127.0.0.1:8000/dashboard/filters", {
    cache: "no-store",
  });

  return response.json();
}