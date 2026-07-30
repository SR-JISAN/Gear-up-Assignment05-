"use server";

import { cookies } from "next/headers";

export const newAccessToken = async () => {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return {
      success: false,
      message: "refresh Token Not Found!",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/auth/refresh-token`,
    {
      method: "post",
      headers: {
        Authentication: `${refreshToken}`,
        cookie: `refreshToken=${refreshToken}`,
      },
      cache: "no-cache",
    },
  );
  const result = await res.json();
  return result;
};
