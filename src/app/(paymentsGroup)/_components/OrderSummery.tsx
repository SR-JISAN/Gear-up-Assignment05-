import Image from "next/image";


interface IProduct {
  id: number;
  title: string;
  details: string;
  brand: string;
  stock: number;
  price_per_day: string;
  product_image: string;
  condition: "NEW" | "USED";
  availability: "AVAILABLE" | "OUT_OF_STOCK";
  categoryId: number;
  providerId: string;
  created_at: string;
  updated_at: string;
}

interface IRentedItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  pricePerDay: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  subTotal: string;
  createdAt: string;
  product: IProduct;
}



export type TOrder = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: number;
    totalAmount: string;
    orderStatus: "PROCESSING" | "COMPLETED" | "CANCELLED";
    pickUpAddress: string;
    pickUpDate: string | null;
    returnDate: string | null;
    customerId: string;
    createdAt: string;
    rentalItem: IRentedItem[];
  };
};

export default function OrderSummary({ order }: { order: TOrder["data"] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-5">
        {order.rentalItem.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 border-b pb-5 last:border-none"
          >
            <Image
              src={item.product.product_image}
              alt={item.product.title}
              width={120}
              height={120}
              className="rounded-xl border object-cover"
            />

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.product.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.product.brand}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Rental Period</span>

                  <p>
                    {item.startDate} → {item.endDate}
                  </p>
                </div>

                <div>
                  <span className="text-muted-foreground">Quantity</span>

                  <p>{item.quantity}</p>
                </div>

                <div>
                  <span className="text-muted-foreground">Price / Day</span>

                  <p>৳{item.pricePerDay}</p>
                </div>

                <div>
                  <span className="text-muted-foreground">Subtotal</span>

                  <p className="font-semibold">৳{item.subTotal}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t pt-6">
        <span className="text-lg font-medium">Total Amount</span>

        <span className="text-2xl font-bold text-primary">
          ৳{order.totalAmount}
        </span>
      </div>
    </div>
  );
}
