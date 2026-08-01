"use server";

import { cookies } from "next/headers";

export type TUpdateOrderState = {
  success: boolean;
  message: string;
};





export async function updateOrderAction(
  prevState: TUpdateOrderState,
  formData: FormData,
): Promise<TUpdateOrderState> {
  try {
    const orderId = formData.get("orderId");
    const orderStatus = formData.get("orderStatus");

    if (!orderId || !orderStatus) {
      return {
        success: false,
        message: "Missing order information.",
      };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/orders/update/${orderId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderStatus,
        }),
      },
    );

    const result = await res.json();

    if (!res.ok || !result.success) {
      return {
        success: false,
        message: result.message,
      };
    }

    return {
      success: true,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Failed to update order.",
    };
  }
}
