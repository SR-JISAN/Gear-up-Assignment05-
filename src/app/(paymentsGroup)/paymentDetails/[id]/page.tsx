import { getSinglePayment } from "../../_actions/getSinglePaymentAction";


import PaymentInformation from "../../_components/PaymentInformation";
import PaymentSummaryCard from "../../_components/PaymentSummaryCard";
import OrderDetailsSummary from "@/app/(rentedGroup)/_components/OrderDeatilsSummary";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PaymentDetailsPage({ params }: Props) {
  const { id } = await params;

  const payment = await getSinglePayment(id);

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Payment Details</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <OrderDetailsSummary order={payment.order} />

          <PaymentInformation payment={payment} />
        </div>

        <PaymentSummaryCard payment={payment} />
      </div>
    </div>
  );
}
