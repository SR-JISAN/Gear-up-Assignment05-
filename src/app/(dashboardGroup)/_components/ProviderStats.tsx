import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, DollarSign } from "lucide-react";

type ProviderStatsProps = {
  totalProducts: number;
  totalOrders: number;
  totalEarnings: number;
};

export default function ProviderStats({
  totalProducts,
  totalOrders,
  totalEarnings,
}: ProviderStatsProps) {
  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: ShoppingCart,
    },
    {
      title: "Total Earnings",
      value: `$ ${totalEarnings}`,
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>

              <Icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
