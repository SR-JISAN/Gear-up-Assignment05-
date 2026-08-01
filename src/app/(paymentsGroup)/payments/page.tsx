import { getOrder } from "../_actions/getOrderAction";
import OrderSummary from "../_components/OrderSummery";
import PaymentButton from "../_components/PaymentButton";




interface Props {
  searchParams: Promise<{
    orderId?: string;
  }>;
}

export default async function PaymentPage({ searchParams }: Props) {
  const { orderId } = await searchParams;

  if (!orderId) {
    return <div className="text-center py-20">Order not found</div>;
  }

  const order = await getOrder(orderId);

  return (
    <div className="container mx-auto py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <OrderSummary order={order} />
        </div>

        <div>
          <PaymentButton
            orderId={order.id.toString()}
            total={order.totalAmount}
          />
        </div>
      </div>
    </div>
  );
}
