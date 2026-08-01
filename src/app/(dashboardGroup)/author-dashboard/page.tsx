import { getProviderDashboard } from "../_actions/providerDashboardActions";
import ProductTable from "../_components/ProductTable";
import ProviderStats from "../_components/ProviderStats";

export default async function ProviderDashboardPage() {
  const data = await getProviderDashboard();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Provider Dashboard</h1>

        <p className="text-muted-foreground">Welcome back!</p>
      </div>

      <ProviderStats
        totalProducts={data.totalProducts}
        totalOrders={data.totalOrders}
        totalEarnings={data.totalEarnings}
      />

      <ProductTable products={data.products} />
    </div>
  );
}
