"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function deleteReviewAction(id: number) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/reviews/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token!,
        },
      },
    );

    const result = await res.json();

    revalidatePath("/my-reviews");

    return result;
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
