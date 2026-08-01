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


import PaymentStatusBadge from "./PaymentsStatusBadge";
import PaymentActionsComponents from "./PaymentActionsComponents";
import { IPayment } from "../_actions/paymentType";

interface Props {
  payments: IPayment[];
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
}

export default function PaymentHistoryTable({ payments, role }: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
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
          {payments.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="py-8 text-center text-muted-foreground"
              >
                No payment history found.
              </TableCell>
            </TableRow>
          ) : (
            payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>#{payment.order.id}</TableCell>

                <TableCell>৳{payment.amount}</TableCell>

                <TableCell>
                  <PaymentStatusBadge status={payment.status} />
                </TableCell>

                <TableCell>{payment.gateway}</TableCell>

                <TableCell>
                  {payment.paidAt ? new Date(payment.paidAt).toLocaleDateString() : "N/A"}
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`/paymentDetails/${payment.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>

                    <PaymentActionsComponents payment={payment} role={role} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
