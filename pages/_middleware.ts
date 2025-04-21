// middleware.ts  (liegt im Repo‑Root)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Routen, die ohne Login erreichbar sein sollen */
const PUBLIC_PATHS = ["/login", "/api/webhooks"]; // ergänze nach Bedarf

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* ---------- 1. Statische Dateien & Next intern ---------- */
  //  - _next/static, images, favicon, robots.txt …
  //  - API‑Routen (beginnend mit /api/) → meist öffentlich, Auth ggf. dort selbst prüfen
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.match(/^\\/favicon.ico$/) ||
    pathname.match(/^\\/robots.txt$/) ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  /* ---------- 2. Login‑Check ---------- */
  const isPublicRoute = PUBLIC_PATHS.includes(pathname);
  const usernameCookie = request.cookies.get("energiekrieg_user");
  const isLoggedIn = !!usernameCookie?.value;

  if (!isLoggedIn && !isPublicRoute) {
    // ↪︎ Weiterleitung zur Login‑Seite
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?next=${pathname}`; // optional: Ziel‑Pfad merken
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

/* ---------- 3. Matcher ---------- */
/*  Macht die Middleware nur für die gewünschten Routen aktiv.
 *  Hier: standardmäßig alles unter /, außer public/verz. u. API – Next 14 empfohlen.
 */
export const config = {
  matcher: ["/((?!_next/|static/).*)"],
};
