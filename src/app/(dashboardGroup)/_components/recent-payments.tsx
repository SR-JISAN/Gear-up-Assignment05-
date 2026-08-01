import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Payment } from "../_actions/dashboardType";



export default function RecentPayments({ payments }: { payments: Payment[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="
                flex
                justify-between
                items-center
                rounded-lg
                border
                p-4
                "
            >
              <div>
                <p className="font-medium">Payment #{payment.id}</p>

                <p className="text-sm text-muted-foreground">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold">${payment.amount}</p>

                <Badge>{payment.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
