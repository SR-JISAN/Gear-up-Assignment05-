"use server";

import { cookies } from "next/headers";

export const getOrder = async (orderId: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/orders/single/${orderId}`,
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
};
