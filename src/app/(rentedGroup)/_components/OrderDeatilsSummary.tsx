"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IOrder, IRentalItem } from "../_actions/getSingleOrderAction";

interface Props {
  order: IOrder;
}

export default function OrderDetailsSummary({ order }: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

        <div className="space-y-5">
          {order.rentalItem.map((item : IRentalItem) => (
            <div
              key={item.id}
              className="flex gap-4 border-b pb-5 last:border-none"
            >
              <Image
                src={item.product.product_image || "/placeholder.png"}
                alt={item.product.title}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.product.title}</h3>

                

                <div className="mt-3 space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Quantity:</span>{" "}
                    {item.quantity}
                  </p>

                  <p>
                    <span className="font-medium">Rental:</span>{" "}
                    {new Date(item.startDate).toLocaleDateString()} -{" "}
                    {new Date(item.endDate).toLocaleDateString()}
                  </p>

                  <p>
                    <span className="font-medium">Days:</span> {item.totalDays}
                  </p>

                  <p>
                    <span className="font-medium">Price / Day:</span> ৳
                    {item.pricePerDay}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold">৳{item.subTotal}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Total Items</span>

            <span>{order.rentalItem.length}</span>
          </div>

          <div className="flex justify-between">
            <span>Status</span>

            <span className="font-semibold">{order.orderStatus}</span>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total Amount</span>

            <span>৳{order.totalAmount}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
