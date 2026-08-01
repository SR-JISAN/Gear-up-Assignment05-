"use server";

import { cookies } from "next/headers";

export const userInfo = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged In!",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/users/my-profile`,
    {
      headers: {
        Authentication: `${accessToken}`,
        cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["my-profile"],
      },
    },
  );
  const result = await res.json();
  return result;
};
