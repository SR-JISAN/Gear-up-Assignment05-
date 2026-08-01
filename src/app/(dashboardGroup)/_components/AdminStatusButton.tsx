"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

import { updateUserStatus } from "../_actions/adminDashboardActions";
import { AdminUser } from "../_actions/dashboardType";



export default function AdminStatusButton({ user }: { user: AdminUser }) {
  const [pending, startTransition] = useTransition();

  const handleStatus = () => {
    const newStatus = user.customer_status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

    startTransition(async () => {
      const result = await updateUserStatus(user.id, newStatus);

      if (result.success) {
        toast.success(`User ${newStatus.toLowerCase()} successfully`);
      } else {
        toast.error("Failed to update user status");
      }
    });
  };

  return (
    <Button
      size="sm"
      disabled={pending}
      variant={user.customer_status === "ACTIVE" ? "destructive" : "default"}
      onClick={handleStatus}
    >
      {pending
        ? "Updating..."
        : user.customer_status === "ACTIVE"
          ? "Block User"
          : "Unblock User"}
    </Button>
  );
}
