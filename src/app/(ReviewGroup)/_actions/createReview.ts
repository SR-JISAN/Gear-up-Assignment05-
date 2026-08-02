"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function createReview(data: {
  productId: number;
  rating: number;
  comment: string;
}) {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/reviews/create`, {
    method: "POST",
    headers: {
      Authorization: token!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/my-reviews");

  return res.json();
}
