"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { CategoryResponse } from "./categoryType";

const BACKEND_URL = process.env.BACKEND_APP_URL!;

export async function createCategory(formData: FormData) {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const payload = {
      name: formData.get("name"),
    };

    const res = await fetch(`${BACKEND_URL}/api/products/category`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Failed to create category",
      };
    }

    revalidatePath("/admin-dashboard");

    return {
      success: true,
      message: "Category created successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function getAllCategories() {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${BACKEND_URL}/api/products/categories`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: CategoryResponse = await res.json();

  return data.data;
}
