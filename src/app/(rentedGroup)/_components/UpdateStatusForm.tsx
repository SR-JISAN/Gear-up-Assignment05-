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

const statusOptions: Record<
  string,
  {
    value: string;
    label: string;
  }[]
> = {
  PLACED: [
    {
      value: "CONFIRMED",
      label: "Confirm",
    },
  ],

  PAID: [
    {
      value: "PICKED_UP",
      label: "Mark Picked Up",
    },
  ],

  PICKED_UP: [
    {
      value: "RETURNED",
      label: "Mark Returned",
    },
  ],
};

export default function UpdateStatusForm({ orderId, currentStatus }: Props) {
  const router = useRouter();

  const [state, action, pending] = useActionState(
    updateOrderAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  const options = statusOptions[currentStatus] || [];

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="orderId" value={orderId} />

      <Select name="orderStatus" disabled={options.length === 0 || pending}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>

        <SelectContent>
          {options.length > 0 ? (
            options.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="NO_ACTION" disabled>
              No Action Available
            </SelectItem>
          )}
        </SelectContent>
      </Select>

      <Button
        type="submit"
        className="w-full"
        disabled={pending || options.length === 0}
      >
        {pending ? "Updating..." : "Update Status"}
      </Button>
    </form>
  );
}
