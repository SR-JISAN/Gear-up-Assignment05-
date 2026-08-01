"use client";

import Link from "next/link";
import { CreditCard, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

import { IPayment } from "../_actions/getPaymentsAction";

interface Props {
  payment: IPayment;
}

export default function PaymentActionsComponents({ payment }: Props) {
  
  if (payment.order.orderStatus === "CANCELLED") {
    return null;
  }

 
  if (payment.status === "SUCCESS") {
    return null;
  }

  // Pending payment
  if (payment.status === "PENDING") {
    return (
      <Button asChild size="sm">
        <Link href={`/payments?orderId=${payment.order.id}`}>
          <CreditCard className="mr-2 h-4 w-4" />
          Pay Now
        </Link>
      </Button>
    );
  }

  
  return (
    <Button asChild size="sm">
      <Link href={`/payments?orderId=${payment.order.id}`}>
        <RotateCcw className="mr-2 h-4 w-4" />
        Retry
      </Link>
    </Button>
  );
}
