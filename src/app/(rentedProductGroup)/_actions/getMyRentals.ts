"use server";

import { cookies } from "next/headers";

export async function getMyRentals() {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/orders/all`,
    {
      headers: {
        Authorization: token!,
      },
      cache: "no-store",
    },
  );

  const data = await res.json();

  return data.data;
}
