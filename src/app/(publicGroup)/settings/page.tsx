import {
  Bell,
  Lock,
  User,
  ShieldCheck,
  Settings as SettingsIcon,
  Mail,
  Smartphone,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
            <SettingsIcon className="h-6 w-6 text-cyan-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Settings</h1>

            <p className="text-muted-foreground">
              Manage your account preferences and security
            </p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <section className="rounded-xl border bg-white shadow-sm">
        <div className="border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-cyan-600" />

            <div>
              <h2 className="font-semibold text-lg">Account Settings</h2>

              <p className="text-sm text-muted-foreground">
                Manage your basic account information
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <input
              type="text"
              defaultValue="Md Jisan"
              className="w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              defaultValue="dev.md.jisan@gmail.com"
              className="w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              className="w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div className="flex justify-end">
            <button className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700">
              Save Changes
            </button>
          </div>
        </div>
      </section>

      {/* Password & Security */}
      <section className="rounded-xl border bg-white shadow-sm">
        <div className="border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-cyan-600" />

            <div>
              <h2 className="font-semibold text-lg">Password & Security</h2>

              <p className="text-sm text-muted-foreground">
                Keep your account secure
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Current Password
            </label>

            <input
              type="password"
              placeholder="Enter current password"
              className="w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm New Password
            </label>

            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full rounded-lg border px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div className="flex justify-end">
            <button className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700">
              Update Password
            </button>
          </div>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="rounded-xl border bg-white shadow-sm">
        <div className="border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-cyan-600" />

            <div>
              <h2 className="font-semibold text-lg">
                Notification Preferences
              </h2>

              <p className="text-sm text-muted-foreground">
                Choose how you want to receive notifications
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y">
          <NotificationOption
            icon={Mail}
            title="Email Notifications"
            description="Receive important updates and account notifications by email."
            defaultChecked
          />

          <NotificationOption
            icon={Bell}
            title="Rental Notifications"
            description="Get updates about your rental orders and return dates."
            defaultChecked
          />

          <NotificationOption
            icon={Smartphone}
            title="SMS Notifications"
            description="Receive important alerts directly on your phone."
          />
        </div>
      </section>

      {/* Security Status */}
      <section className="flex items-start gap-4 rounded-xl border bg-green-50 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-100">
          <ShieldCheck className="h-6 w-6 text-green-600" />
        </div>

        <div>
          <h3 className="font-semibold text-green-800">
            Your account is secure
          </h3>

          <p className="mt-1 text-sm text-green-700">
            Your account security settings are currently up to date.
          </p>
        </div>
      </section>
    </div>
  );
}

function NotificationOption({
  icon: Icon,
  title,
  description,
  defaultChecked = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-5 px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
          <Icon className="h-5 w-5 text-slate-600" />
        </div>

        <div>
          <h3 className="font-medium">{title}</h3>

          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-cyan-600 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
      </label>
    </div>
  );
}
