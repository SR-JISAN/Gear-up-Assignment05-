"use server";

import { cookies } from "next/headers";
import { IReviewsResponse } from "./review.type";

export async function getMyReviews() : Promise<IReviewsResponse> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

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