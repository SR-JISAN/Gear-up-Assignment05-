"use server";

import { cookies } from "next/headers";

export async function getCustomerDashboard() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;
    console.log(token);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/dashboard/customer`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}
