"use server";

import { cookies } from "next/headers";

export async function getSinglePayment(id: string) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/payments/histories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result.data;
}
