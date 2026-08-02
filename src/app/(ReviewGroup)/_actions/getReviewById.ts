"use server";

import { cookies } from "next/headers";

export async function getReviewById(id: number) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/reviews/single/${id}`,
    {
      headers: {
        Authorization: token!,
      },
      cache: "no-store",
    },
  );

  return res.json();
}
