import { getCustomerDashboard } from "../_actions/dashboardActions";
import { CustomerDashboardData } from "../_actions/dashboardType";
import CustomerDashboard from "../_components/customer-dashboard";


export default async function CustomerDashboardPage() {
  const response = await getCustomerDashboard();

  if (!response) {
    return (
      <main className="container mx-auto py-10">
        <div
          className="
          flex
          min-h-100
          items-center
          justify-center
          rounded-xl
          border
          "
        >
          <p className="text-muted-foreground">Unable to load dashboard data</p>
        </div>
      </main>
    );
  }

  const dashboardData: CustomerDashboardData = {
    totalOrders: response.totalOrders ?? 0,

    activeOrders: response.activeOrders ?? 0,

    totalPayment: response.totalPayment ?? 0,

    products: response.products ?? 0,

    recentPayments: response.recentPayments ?? [],
  };

  return (
    <main className="container mx-auto py-8">
      <CustomerDashboard data={dashboardData} />
    </main>
  );
}
