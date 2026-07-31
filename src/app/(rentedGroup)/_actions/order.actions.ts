"use server";

import { cookies } from "next/headers";

export const rentProduct = async (payload: unknown) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/orders/rentals`, {
    method: "POST",
    headers: {
      Authorization: token ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};






