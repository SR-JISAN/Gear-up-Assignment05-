import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${process.env.BACKEND_APP_URL}/api/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Google login failed",
        },
        {
          status: response.status,
        },
      );
    }

    const { accessToken, refreshToken } = result.data;

    const nextResponse = NextResponse.json({
      success: true,
      message: "Google Login Successful",
      data: {
        user: result.data.user,
      },
    });

    // Access Token
    nextResponse.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    // Refresh Token
    nextResponse.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return nextResponse;
  } catch (error) {
    console.error("Google login proxy error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Google login failed",
      },
      {
        status: 500,
      },
    );
  }
}
