"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { updateOrderAction } from "../_actions/updateOrderAction";

interface Props {
  orderId: number;
  currentStatus: string;
  role: "ADMIN" | "PROVIDER";
}

const initialState = {
  success: false,
  message: "",
};

export default function UpdateStatusForm({
  orderId,
  currentStatus,
  role,
}: Props) {
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
    <form action={action} className="space-y-4">
      <input type="hidden" name="orderId" value={orderId} />

      <Select name="orderStatus" defaultValue={currentStatus}>
        <SelectTrigger>
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="CONFIRM">Confirm</SelectItem>

          <SelectItem value="PICKED_UP">Picked Up</SelectItem>

          <SelectItem value="RETURNED">Returned</SelectItem>

          {role === "ADMIN" && (
            <SelectItem value="CANCELLED">Cancelled</SelectItem>
          )}
        </SelectContent>
      </Select>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Updating..." : "Update Status"}
      </Button>
    </form>
  );
}
