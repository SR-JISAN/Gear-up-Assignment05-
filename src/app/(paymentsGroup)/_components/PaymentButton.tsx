"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { paymentAction } from "../_actions/paymentsAction";

const initialState = {
  success: false,
  message: "",
  checkoutUrl: "",
};

interface PaymentButtonProps {
  orderId: string;
  total: string;
}

export default function PaymentButton({ orderId, total }: PaymentButtonProps) {
  const [state, formAction, pending] = useActionState(
    paymentAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    toast.success(state.message);

    if (state.checkoutUrl) {
      window.location.href = state.checkoutUrl;
    }
  }, [state]);

  return (
    <div className="sticky top-24 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Payment Summary</h2>

      <div className="my-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total Amount</span>

          <span className="text-2xl font-bold text-primary">${total}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-green-600">
          <ShieldCheck className="h-4 w-4" />
          <span>Secure payment powered by Stripe</span>
        </div>
      </div>

      <form action={formAction} className="space-y-3">
        <input type="hidden" name="orderId" value={orderId} />

        <Button type="submit" className="w-full" disabled={pending}>
          <CreditCard className="mr-2 h-4 w-4" />

          {pending ? "Redirecting..." : "Pay Securely"}
        </Button>

        <Button asChild type="button" variant="outline" className="w-full">
          <Link href="/payment/cancel">Cancel Payment</Link>
        </Button>
      </form>
    </div>
  );
}
