import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IPayment } from "../_actions/paymentType";
import PaymentStatusBadge from "./PaymentsStatusBadge";


interface Props {
  payment: IPayment;
}

export default function PaymentSummaryCard({ payment }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Amount</span>
          <span className="font-bold">৳{payment.amount}</span>
        </div>

        <div className="flex justify-between">
          <span>Gateway</span>
          <span>{payment.gateway}</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <PaymentStatusBadge status={payment.status} />
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Transaction ID</p>

          <p className="break-all text-sm">{payment.transactionId}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Paid At</p>

          <p>
            {payment.paidAt
              ? new Date(payment.paidAt).toLocaleString()
              : "Not Paid"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
