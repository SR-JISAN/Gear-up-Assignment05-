"use server";

import { cookies } from "next/headers";

export async function getMyRentals() {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/orders/all`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  

  if (!res.ok || !result.success) {
    throw new Error(result.message || "Failed to fetch rentals");
  }

  return result.data;
}
