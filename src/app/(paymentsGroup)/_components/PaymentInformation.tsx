import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import { IPayment } from "../_actions/paymentType";




interface Props {
  payment: IPayment;
}

export default function PaymentInformation({ payment }: Props) {
    
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Customer</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="font-medium">{payment.order.customer.name}</p>

          <p className="text-muted-foreground">
            {payment.order.customer.email}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rental Items</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {payment.order.rentalItem.map((item) => (
            <div key={item.id} className="flex gap-4">
              <Image
                src={item.product.product_image}
                alt={item.product.title}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />

              <div>
                <h4 className="font-semibold">{item.product.title}</h4>

                <p>Qty: {item.quantity}</p>

                <p>
                  {item.startDate} - {item.endDate}
                </p>

                <p className="font-medium">${item.subTotal}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
