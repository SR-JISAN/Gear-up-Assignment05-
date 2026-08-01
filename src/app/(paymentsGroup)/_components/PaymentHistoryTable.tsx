import Link from "next/link";
import { Eye } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { IPayment } from "../_actions/getPaymentsAction";
import PaymentStatusBadge from "./PaymentsStatusBadge";
import PaymentActionsComponents from "./PaymentActionsComponents";



interface Props {
  payments: IPayment[];
}

export default function PaymentHistoryTable({ payments }: Props) {

  return (
    <div className="rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>

            <TableHead>Amount</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Gateway</TableHead>

            <TableHead>Date</TableHead>

            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>#{payment.order.id}</TableCell>

              <TableCell>৳{payment.amount}</TableCell>

              <TableCell>
                <PaymentStatusBadge status={payment.status} />
              </TableCell>

              <TableCell>{payment.gateway}</TableCell>

              <TableCell>
                {new Date(payment.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell>
                <PaymentStatusBadge status={payment.status} />
              </TableCell>

              <TableCell>{payment.gateway}</TableCell>

              <TableCell>
                {payment.paidAt
                  ? new Date(payment.paidAt).toLocaleDateString()
                  : "--"}
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/paymentDetails/${payment.id}`}>View</Link>
                </Button>

                <PaymentActionsComponents payment={payment} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
