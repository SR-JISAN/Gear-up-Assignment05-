"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type TOrderState = {
  success: boolean;
  message: string;
};

export const createOrderAction = async (
  prevState: TOrderState,
  formData: FormData,
): Promise<TOrderState> => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const payload = {
    pickUpAddress: formData.get("pickUpAddress"),

    items: [
      {
        productId: Number(formData.get("productId")),
        quantity: Number(formData.get("quantity")),
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
      },
    ],
  };

  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/orders/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message,
    };
  }

  redirect(`/payments?orderId=${result.data.id}`);
};
