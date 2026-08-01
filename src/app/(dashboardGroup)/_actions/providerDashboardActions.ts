"use server";

import { cookies } from "next/headers";

const BACKEND_URL = process.env.BACKEND_APP_URL!;

export async function getProviderDashboard() {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${BACKEND_URL}/api/dashboard/provider`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  const result = await res.json();

  return result.data;
}
