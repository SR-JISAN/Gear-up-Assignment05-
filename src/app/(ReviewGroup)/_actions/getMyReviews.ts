"use server";

import { cookies } from "next/headers";

export async function getMyReviews() {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/reviews/my-reviews`,
    {
      headers: {
        Authorization: token!,
      },
      cache: "no-store",
    },
  );

  return res.json();
}
