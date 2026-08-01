"use server";

import { cookies } from "next/headers";

export interface IOrder {
  id: number;
  orderStatus:
    | "PROCESSING"
    | "CONFIRM"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "CANCELLED";
}

export interface IPayment {
  id: number;
  amount: string;
  gateway: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  transactionId: string;
  paidAt: string | null;
  createdAt: string;
  order: IOrder;
}

export async function getPayments(): Promise<IPayment[]> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/payments/history`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    throw new Error(result.message);
  }

  return result.data;
}
