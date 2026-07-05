export interface DashboardData {
  kpis: {
    revenue: number;
    profit: number;
    transactions: number;
    products: number;
    countries: number;
  };

  monthly_sales: Record<string, number>;

  category_sales: Record<string, number>;

  country_sales: Record<string, number>;

  top_products: Record<string, number>;
}