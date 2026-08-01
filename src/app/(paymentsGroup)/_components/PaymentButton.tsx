"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { paymentAction } from "../_actions/paymentsAction";


const initialState = {
  success: false,
  message: "",
  checkoutUrl: "",
};

export default function PaymentButton({ orderId }: { orderId: string }) {
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
    <form action={formAction}>
      <input type="hidden" name="orderId" value={orderId} />

      <Button className="w-full" disabled={pending}>
        {pending ? "Redirecting..." : "Pay Now"}
      </Button>
    </form>
  );
}
