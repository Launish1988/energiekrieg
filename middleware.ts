// pages/_middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Zugriffsschutz:
 *   – Öffentliche Assets, API-Routen, Login & Register immer zulassen.
 *   – Sonst weiterleiten auf /login, wenn kein Cookie "username" existiert.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) Immer öffentlich: Next-J internals, static Dateien, favicon, robots, API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // 2) Öffentliche Seiten (Login/Register)
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  // 3) Alle anderen Seiten sind geschützt
  const username = request.cookies.get("username");
  if (!username) {
    // Wenn kein Cookie, zurück auf /login
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  // Cookie da → Zugriff gewähren
  return NextResponse.next();
}
