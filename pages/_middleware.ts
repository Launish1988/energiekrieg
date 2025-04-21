import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Seiten, die man auch ohne Login sehen darf
  const publicPaths = ['/login'];

  // Zugriff ohne Login blockieren
  const username = request.cookies.get('username');

  const isPublic = publicPaths.includes(pathname);
  const isLoggedIn = !!username;

  if (!isLoggedIn && !isPublic) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
