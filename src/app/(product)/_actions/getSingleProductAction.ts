"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const getSingleProductAction = async (id: number) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/products/single/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      },
    );

    return await res.json();
  } catch {
    return null;
  }
};

export async function updateProductAction(id: number, formData: FormData) {
  const token = (await cookies()).get("accessToken")?.value;

  const payload = {
    title: formData.get("title"),
    brand: formData.get("brand"),
    stock: Number(formData.get("stock")),
    price_per_day: Number(formData.get("price_per_day")),
  };

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/products/update/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (res.ok) {
    revalidatePath("/dashboard/provider/products");
  }

  return result;
}
