import {
  ShoppingCart,
  Clock,
  CreditCard,
  Package,
  LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerDashboardData } from "../_actions/dashboardType";



const cardConfig: {
  title: string;
  key: keyof CustomerDashboardData;
  icon: LucideIcon;
}[] = [
  {
    title: "Total Orders",
    key: "totalOrders",
    icon: ShoppingCart,
  },
  {
    title: "Active Rentals",
    key: "activeOrders",
    icon: Clock,
  },
  {
    title: "Total Payment",
    key: "totalPayment",
    icon: CreditCard,
  },
  {
    title: "Products Rented",
    key: "products",
    icon: Package,
  },
];

export default function DashboardStats({
  data,
}: {
  data: CustomerDashboardData;
}) {

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {cardConfig.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.key}>
            <CardHeader
              className="
                flex 
                flex-row 
                items-center 
                justify-between
                "
            >
              <CardTitle className="text-sm">{card.title}</CardTitle>

              <Icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <h2 className="text-3xl font-bold">{data[card.key] as number}</h2>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
