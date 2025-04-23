// pages/_middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) Assets & public endpoints immer zulassen
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||     // ← hier freigeben
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // 2) Login und Register bleiben öffentlich
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  // 3) Alle anderen Routen nur mit Cookie „username“
  const username = request.cookies.get("username");
  if (!username) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
