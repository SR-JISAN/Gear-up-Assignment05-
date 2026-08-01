"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface TUpdateProfileState {
  success: boolean;
  message: string;
}

export async function updateProfileAction(
  _: TUpdateProfileState,
  formData: FormData,
): Promise<TUpdateProfileState> {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const body = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      profileImage: formData.get("profileImage"),
    };

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/users/update-profile`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

    revalidatePath("/profile");

    return {
      success: true,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Profile update failed.",
    };
  }
}
