"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export type UpdateReviewState = {
  success: boolean;
  message: string;
};

export async function updateReviewAction(
  id: number,
  _: UpdateReviewState,
  formData: FormData,
): Promise<UpdateReviewState> {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const rating = Number(formData.get("rating"));
    const comment = String(formData.get("comment"));

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/reviews/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          comment,
        }),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Failed to update review",
      };
    }

    revalidatePath("/my-reviews");
    revalidatePath(`/reviews/${id}`);

    return {
      success: true,
      message: "Review updated successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
