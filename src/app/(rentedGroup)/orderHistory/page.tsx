
import { getOrdersHistory } from "../_actions/getOrderAction";
import { IOrder } from "../_actions/order";
import OrderHistory from "../_components/OrderHistory";


export default async function OrdersPage() {
  const orders : IOrder[] = await getOrdersHistory();

  return (
    <section className="container w-11/12 md:w-10/12 mx-auto py-8">
      <div className="mb-8  text-center">
        <h1 className="text-3xl font-bold">All Orders</h1>

        <p className="text-muted-foreground">
          View your rental history and complete pending payments.
        </p>
      </div>

      <OrderHistory orders={orders} />
    </section>
  );
}
