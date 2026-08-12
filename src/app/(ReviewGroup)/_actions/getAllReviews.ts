"use server";

import { cookies } from "next/headers";

export async function getAllReviews() {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/reviews`, {
    headers: {
      Authorization: `Bearer ${token}` || "",
    },
    cache: "no-store",
  });

  return res.json();
}
