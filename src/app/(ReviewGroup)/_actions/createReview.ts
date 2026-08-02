"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface TCreateReviewState {
  success: boolean;
  message: string;
}

export async function createReviewAction(
  _: TCreateReviewState,
  formData: FormData,
): Promise<TCreateReviewState> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }

    const payload = {
      productId: Number(formData.get("productId")),
      rating: Number(formData.get("rating")),
      comment: String(formData.get("comment")),
    };

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/reviews/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Failed to create review",
      };
    }

    revalidatePath("/rentals");
    revalidatePath("/my-reviews");

    return {
      success: true,
      message: result.message || "Review created successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
