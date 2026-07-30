"use server";


import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type TPreState = {
  success: true;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (preState: TPreState, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const payload = {
    email,
    password,
  };
  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/auth/login`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    const decode = jwt.decode(result.data.accessToken) as JwtPayload;
    if (decode.role === "CUSTOMER") {
      redirect("/dashboard");
    } else if (decode.role === "PROVIDER") {
      redirect("/author-dashboard");
    } else if (decode.role === "ADMIN") {
      redirect("/admin-dashboard");
    }
  }
  return result;
};
