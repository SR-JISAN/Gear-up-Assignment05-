import { Calendar,  Mail, MapPin, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderStatusBadge from "./OrderStatusBadge";
import { IOrder } from "../_actions/getSingleOrderAction";

interface Props {
  order: IOrder;
}

export default function OrderInformation({ order }: Props) {


  return (
    <div className=" gap-6 ">
     

      {order.customer && (
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Name</p>

                <p className="font-medium">{order.customer.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Email</p>

                <p className="font-medium">{order.customer.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

     

      <Card>
        <CardHeader>
          <CardTitle>Order Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Status</span>

            <OrderStatusBadge status={order.orderStatus} />
          </div>

          <div className="flex items-center justify-between">
            <span>Total Amount</span>

            <span className="font-bold">${order.totalAmount}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />

            <span>{new Date(order.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />

            <span>{order.pickUpAddress}</span>
          </div>
        </CardContent>
      </Card>

      

      
    </div>
  );
}
