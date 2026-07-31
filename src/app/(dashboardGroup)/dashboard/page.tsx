import ActiveRentals from "../_components/ActiveRentals";
import DashboardStats from "../_components/DashboardStats";
import ProfileCard from "../_components/ProfileCard";
import QuickActions from "../_components/QuickActions";
import RentalHistory from "../_components/RentalHistory";


export default function UserDashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <ActiveRentals />
          <RentalHistory />
        </div>

        <div className="space-y-6">
          <ProfileCard />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
