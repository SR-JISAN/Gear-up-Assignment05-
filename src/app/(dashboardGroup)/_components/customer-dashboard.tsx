import { CustomerDashboardData } from "../_actions/dashboardType";
import DashboardStats from "./DashBoardState";


import RecentPayments from "./recent-payments";


export default function CustomerDashboard({
  data,
}: {
  data: CustomerDashboardData;
}) {
    
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Customer Dashboard</h1>

      <DashboardStats data={data} />

      <RecentPayments payments={data.recentPayments} />
    </div>
  );
}
