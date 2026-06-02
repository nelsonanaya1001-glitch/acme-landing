import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const clientSession = request.cookies.get("client_session");
  const adminSession  = request.cookies.get("admin_session");
  const { pathname }  = request.nextUrl;

  // Protect /dashboard (client portal)
  if (pathname.startsWith("/dashboard") && clientSession?.value !== "authenticated") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Protect /admin panel
  if (pathname.startsWith("/admin") && adminSession?.value !== "admin_authenticated") {
    // Let the page handle login inline — no redirect needed
  }

  // Redirect already-logged-in users away from login pages
  if (pathname === "/login" && clientSession?.value === "authenticated") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/admin/:path*", "/admin"],
};
