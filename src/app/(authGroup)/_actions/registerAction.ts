"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

export type TActionState = {
  success: boolean;
  statusCode?: number;
  message: string;
};

export const registerAction = async (
  prevState: TActionState,
  formData: FormData,
): Promise<TActionState> => {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      password: formData.get("password"),
      role: formData.get("role"),
    };

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const result = await res.json();

    if (!res.ok || !result.success) {
      return {
        success: false,
        statusCode: result.statusCode,
        message: result.message,
      };
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

  const role = result.data.user.role;

switch (role) {
  case "CUSTOMER":
    redirect("/");
  case "PROVIDER":
    redirect("/provider-dashboard");
  case "ADMIN":
    redirect("/admin-dashboard");
}

  } catch (error) {
    console.error(error);
    throw error;
  }

redirect("/");
};
