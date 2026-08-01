"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const BACKEND_URL = process.env.BACKEND_APP_URL;

export async function getAllUsers() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${BACKEND_URL}/api/users/all-users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function updateUserStatus(
  id: string,
  customer_status: "ACTIVE" | "BLOCKED",
) {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${BACKEND_URL}/api/users/${id}/role-status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        customer_status,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    revalidatePath("/admin-dashboard");

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
    };
  }
}
