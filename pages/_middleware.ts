// pages/_middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Zugriffsschutz:
 *   – Öffentliche Assets, API-Routen, Login & Register immer zulassen.
 *   – Sonst: nur weiterleiten, wenn Cookie "username" existiert.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* ---------- 1) Immer öffentlich ---------- */
  if (
    pathname.startsWith("/_next") ||          // Next-internes Bundling
    pathname.startsWith("/static") ||         // eigene statische Dateien
    pathname.endsWith("/favicon.ico") ||      // Favicon
    pathname.endsWith("/robots.txt") ||       // robots.txt
    pathname.startsWith("/api")               // alle API-Routen
  ) {
    return NextResponse.next();
  }

  /* ---------- 2) Öffentliche Seiten ---------- */
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  /* ---------- 3) Auth-geschützte Bereiche ---------- */
  const username = request.cookies.get("username");
  if (!username) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
