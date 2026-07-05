const API_URL = "http://127.0.0.1:8000";

export async function getDashboardData(
  country?: string,
  category?: string
) {
  const params = new URLSearchParams();

  if (country) {
    params.append("country", country);
  }

  if (category) {
    params.append("category", category);
  }

  const res = await fetch(
    `${API_URL}/dashboard/overview?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return res.json();
}

export async function getFilters() {
  const res = await fetch(`${API_URL}/dashboard/filters`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch filters");
  }

  return res.json();
}

export async function getForecast(days: number = 30) {
    const res = await fetch(
        `${API_URL}/dashboard/forecast?days=${days}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
}