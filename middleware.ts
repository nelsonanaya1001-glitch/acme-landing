import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("client_session");
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard") && session?.value !== "authenticated") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname === "/login" && session?.value === "authenticated") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
