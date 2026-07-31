import { Card, CardContent } from "@/components/ui/card";
import { Package, Clock3, CheckCircle2, Wallet } from "lucide-react";

const stats = [
  {
    title: "Active Rentals",
    value: "4",
    icon: Package,
  },
  {
    title: "Pending Orders",
    value: "2",
    icon: Clock3,
  },
  {
    title: "Completed",
    value: "18",
    icon: CheckCircle2,
  },
  {
    title: "Total Spent",
    value: "$780",
    icon: Wallet,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
              </div>

              <div className="rounded-xl bg-primary/10 p-3">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
