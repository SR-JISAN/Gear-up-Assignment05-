import { IOrder } from "../_actions/order";
import OrderCard from "./OrderCard";

interface Props {
  orders: IOrder[];
}
export default function OrderHistory({ orders }: Props) {
  if (orders.length === 0) {
    return (
      <div className="rounded-xl border py-20 text-center">No Orders Found</div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
