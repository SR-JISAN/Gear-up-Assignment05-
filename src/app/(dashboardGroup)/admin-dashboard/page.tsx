import { getAllUsers } from "../_actions/adminDashboardActions";
import UserTable from "../_components/UserTable";

export const dynamic = "force-dynamic";
export default async function AdminDashboardPage() {
  const users = await getAllUsers();

  return (
    <div className="space-y-6 py-5">
      <div>
        <h1 className="text-3xl text-center font-bold">Admin Dashboard</h1>

        <p className="text-muted-foreground text-center">
          Manage users and permissions
        </p>
      </div>

      <UserTable users={users} />
    </div>
  );
}
