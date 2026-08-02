import { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


import { jwtUtils } from "./utils/jwt";
import { newAccessToken } from "./service/refreshToken";

const AUTH_ROUTE = ["/login", "/register"];
const PUBLIC_ROUTE = ["/", "/home", "/products"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();
  

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken: JwtPayload | null = null;

  let decodedRefreshToken: JwtPayload | null = null;

  // Verify Refresh Token
  if (refreshToken) {
    decodedRefreshToken = jwtUtils.verifyToken(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!,
    );
  }

  // Verify Access Token
  if (accessToken) {
    decodedAccessToken = jwtUtils.verifyToken(
      accessToken,
      process.env.JWT_ACCESS_SECRET!,
    );
  }

  // Generate New Access Token
  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await newAccessToken();

    if (result.success) {
      accessToken = result.data.accessToken;

      cookieStore.set("accessToken", accessToken!, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      // Verify newly generated access token
      decodedAccessToken = jwtUtils.verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET!,
      );
    }
  }

  // Invalid Access Token
  if (!decodedAccessToken?.success && accessToken) {
    cookieStore.delete("accessToken");
    accessToken = undefined;
  }

  // Get User Role
  let userRole: string | null = null;

  if (
    decodedAccessToken?.success &&
    typeof decodedAccessToken.data !== "string"
  ) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  // Redirect logged-in users away from auth pages
  if (accessToken && AUTH_ROUTE.includes(pathname)) {
    switch (userRole) {
      case "CUSTOMER":
        return NextResponse.redirect(new URL("/dashboard", request.url));

      case "ADMIN":
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));

      case "PROVIDER":
        return NextResponse.redirect(
          new URL("/author-dashboard", request.url),
        );

      default:
        return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Public Route Check
  const isPublicRoute = PUBLIC_ROUTE.some((route) =>
    route === "/"
      ? pathname === "/"
      : pathname === route || pathname.startsWith(route + "/"),
  );

  // Auth Route Check
  const isAuthRoute = AUTH_ROUTE.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // Protected Route
  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Role Based Access
  if (pathname.startsWith("/dashboard") && userRole !== "CUSTOMER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (pathname.startsWith("/author-dashboard") && userRole !== "PROVIDER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp)$).*)",
  ],
};
