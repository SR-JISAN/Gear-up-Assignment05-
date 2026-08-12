import { getProfile } from "../_actions/getProfileAction";
import AccountInformation from "../_components/AccountInformation";
import PersonalInformation from "../_components/PersonalInformation";
import ProfileCard from "../_components/ProfileCard";

export default async function ProfilePage() {
  const user = await getProfile();
  

  return (
    <section className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">My Profile</h1>

        <p className="text-muted-foreground">
          View and manage your account information.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <ProfileCard user={user} />

        <div className="space-y-8 lg:col-span-2">
          <PersonalInformation user={user} />

          <AccountInformation user={user} />
        </div>
      </div>
    </section>
  );
}
