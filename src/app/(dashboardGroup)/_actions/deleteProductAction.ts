"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const deleteProductAction = async (id: number) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/products/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token!,
        },
      },
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message,
      };
    }

    revalidatePath("/dashboard/provider/products");

    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
