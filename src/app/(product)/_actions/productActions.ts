"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const BACKEND_URL = process.env.BACKEND_APP_URL!;

export async function createProduct(formData: FormData) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const payload = {
    title: formData.get("title"),
    details: formData.get("details"),
    brand: formData.get("brand"),
    stock: Number(formData.get("stock")),
    price_per_day: Number(formData.get("price_per_day")),
    product_image: formData.get("product_image"),
    categoryId: Number(formData.get("categoryId")),
  };

  const res = await fetch(`${BACKEND_URL}/api/products/post`, {
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
      message: data.message,
    };
  }

  revalidatePath("/provider-dashboard");

  return {
    success: true,
    message: "Product Created Successfully",
  };
}

export async function getCategories() {
    
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${BACKEND_URL}/api/products/categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  return data.data;
}