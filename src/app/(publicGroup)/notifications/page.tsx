import { Bell, CheckCircle2, Clock, Package, CreditCard } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Rental Order Confirmed",
    message: "Your rental order #ORD-1024 has been confirmed successfully.",
    type: "Order",
    date: "Aug 12, 2026",
    time: "10:30 AM",
    status: "Read",
  },
  {
    id: 2,
    title: "Payment Successful",
    message: "Your payment of $120 has been received successfully.",
    type: "Payment",
    date: "Aug 11, 2026",
    time: "04:15 PM",
    status: "Read",
  },
  {
    id: 3,
    title: "Rental Return Reminder",
    message: "Your rental item is due for return tomorrow.",
    type: "Reminder",
    date: "Aug 10, 2026",
    time: "09:20 AM",
    status: "Unread",
  },
  {
    id: 4,
    title: "New Gear Available",
    message: "New sports equipment has been added to Gear Up.",
    type: "Product",
    date: "Aug 09, 2026",
    time: "02:45 PM",
    status: "Read",
  },
  {
    id: 5,
    title: "Order Completed",
    message: "Your rental order #ORD-1018 has been completed.",
    type: "Order",
    date: "Aug 08, 2026",
    time: "11:10 AM",
    status: "Read",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
              <Bell className="h-6 w-6 text-cyan-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">Notifications</h1>
              <p className="text-muted-foreground">
                Stay updated with your latest activities
              </p>
            </div>
          </div>
        </div>

        <button className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-slate-50">
          Mark all as read
        </button>
      </div>

      {/* Notification Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Notification
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Date
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Time
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {notifications.map((notification) => (
                <tr
                  key={notification.id}
                  className={`border-t transition hover:bg-slate-50 ${
                    notification.status === "Unread" ? "bg-cyan-50/40" : ""
                  }`}
                >
                  {/* Notification */}
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-4">
                      <NotificationIcon type={notification.type} />

                      <div>
                        <p className="font-semibold text-slate-900">
                          {notification.title}
                        </p>

                        <p className="mt-1 max-w-xl text-sm text-slate-500">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {notification.type}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-5 text-sm text-slate-600">
                    {notification.date}
                  </td>

                  {/* Time */}
                  <td className="px-6 py-5 text-sm text-slate-600">
                    {notification.time}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5 text-center">
                    {notification.status === "Unread" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                        Unread
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Read
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty / Footer info */}
      <div className="flex items-center justify-between rounded-xl border bg-white px-6 py-4 text-sm text-slate-500">
        <span>Showing {notifications.length} notifications</span>

        <span>
          {notifications.filter((item) => item.status === "Unread").length}{" "}
          unread notification
        </span>
      </div>
    </div>
  );
}

function NotificationIcon({ type }: { type: string }) {
  if (type === "Payment") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
        <CreditCard className="h-5 w-5 text-green-600" />
      </div>
    );
  }

  if (type === "Reminder") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100">
        <Clock className="h-5 w-5 text-orange-600" />
      </div>
    );
  }

  if (type === "Product") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100">
        <Package className="h-5 w-5 text-purple-600" />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100">
      <Bell className="h-5 w-5 text-cyan-600" />
    </div>
  );
}
