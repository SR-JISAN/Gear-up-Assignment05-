import Link from "next/link";

import { Calendar, Eye, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderStatusBadge from "./OrderStatusBadge";
import { IOrder } from "../_actions/order";



interface OrderCardProps {
  order: IOrder;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">Order #{order.id}</h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />

            {new Date(order.createdAt).toLocaleDateString()}
          </div>
        </div>

        <OrderStatusBadge status={order.orderStatus} />
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Pickup
          </div>

          <p>{order.pickUpAddress}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Package className="h-4 w-4" />
            Items
          </div>

          <p>{order.rentalItem.length}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Total</p>

          <h3 className="text-xl font-bold">৳{order.totalAmount}</h3>
        </div>
      </div>

     

        
      <div className="mt-6 flex gap-3 justify-end">
        <Button variant="outline" asChild>
          <Link href={`/orderDetails/${order.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            Details
          </Link>
        </Button>
      </div>
     </div>
  );
}
