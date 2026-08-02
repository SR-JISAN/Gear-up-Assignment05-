"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function deleteReview(id: number) {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/reviews/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token!,
      },
    },
  );

  revalidatePath("/my-reviews");

  return res.json();
}
