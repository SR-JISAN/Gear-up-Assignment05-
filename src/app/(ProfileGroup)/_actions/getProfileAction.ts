"use server";

import { cookies } from "next/headers";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  profileImage: string | null;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  customer_status: "ACTIVE" | "BLOCKED";
  stripCustomerId: string | null;
  createdAt: string;
}

export async function getProfile(): Promise<IUser> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/users/my-profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    throw new Error(result.message);
  }

  return result.data;
}
