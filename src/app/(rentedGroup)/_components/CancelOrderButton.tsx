"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { TUpdateOrderState, updateOrderAction } from "../_actions/updateOrderAction";

interface Props {
  orderId: number;
}
const initialState: TUpdateOrderState = {
  success: false,
  message: "",
};

export default function CancelOrderButton({ orderId }: Props) {
  const router = useRouter();

  const [state, action, pending] = useActionState(
    updateOrderAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    toast.success(state.message);

    router.refresh();
  }, [state, router]);

  return (
    <form action={action}>
      <input type="hidden" name="orderId" value={orderId} />

      <input type="hidden" name="orderStatus" value="CANCELLED" />

      <Button type="submit" variant="destructive" disabled={pending}>
        {pending ? "Cancelling..." : "Cancel Order"}
      </Button>
    </form>
  );
}
