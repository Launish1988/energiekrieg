// /middleware.ts   (Root! – nicht unter /pages)

// Next-Middleware API (Next.js 13+)
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
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  /* ---------- 2) Öffentliche Seiten ---------- */
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  /* ---------- 3) Auth-geschützt ---------- */
  const username = request.cookies.get("username")?.value; // ⬅️  Next 13+ Syntax
  if (!username) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

/**
 * Matcher: Middleware greift **für alle Routen**, außer den explizit
 * abgefangenen Assets.  (Alternative zum großen if-Block oben,
 * aber beides zusammen schadet nicht.)
 */
export const config = {
  matcher: [
    /*
     * Skip all internal files (_next) and public assets
     * (robots.txt, favicon.ico, usw.) – identisch zu den Abfragen oben.
     */
    "/((?!_next/|static/|favicon.ico|robots.txt|api/).*)",
  ],
};
