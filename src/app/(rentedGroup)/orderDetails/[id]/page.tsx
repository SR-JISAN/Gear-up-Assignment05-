import { userInfo } from "@/service/userInfo";
import { getSingleOrder } from "../../_actions/getSingleOrderAction";

import OrderInformation from "../../_components/OrderInformation";
import PaymentButton from "@/app/(paymentsGroup)/_components/PaymentButton";
import CancelOrderButton from "../../_components/CancelOrderButton";
import UpdateStatusForm from "../../_components/UpdateStatusForm";
import OrderDetailsSummary from "../../_components/OrderDeatilsSummary";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderDetailsPage({ params }: Props) {
  const { id } = await params;

  const order = await getSingleOrder (id);

  const user = await userInfo()

  const role = user?.data?.role;
  console.log("Role:", role);

  return (
    <div className="container w-full mx-auto py-10">
      <div className="mb-8   text-center">
        <div>
          <h1 className="text-3xl text-shadow font-bold">
            Order Number: {order.id}
          </h1>

          <p className="text-muted-foreground">
            Created {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className=" gap-8 ">
        <div className="space-y-8 ">
          <OrderDetailsSummary order={order} />

          <OrderInformation order={order} />
        </div>

        <div className="space-y-6 text-center">
          {/* CUSTOMER */}

          {role === "CUSTOMER" && order.orderStatus === "PROCESSING" && (
            <>
              <PaymentButton
                orderId={order.id.toString()}
                total={order.totalAmount}
              />

              <CancelOrderButton orderId={order.id} />
            </>
          )}

          {/* PROVIDER */}

          {role === "PROVIDER" && (
            <UpdateStatusForm
              orderId={order.id}
              currentStatus={order.orderStatus}
              role="PROVIDER"
            />
          )}

          {/* ADMIN */}

          {role === "ADMIN" && (
            <UpdateStatusForm
              orderId={order.id}
              currentStatus={order.orderStatus}
              role="ADMIN"
            />
          )}
        </div>
      </div>
    </div>
  );
}
