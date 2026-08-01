"use server";

import { cookies } from "next/headers";

export const getOrdersHistory = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/orders/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result.data;
};
