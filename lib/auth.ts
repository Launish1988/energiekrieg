// lib/auth.ts
import bcrypt from "bcryptjs";
import type { NextApiResponse } from "next";

/** Passwörter sicher hashen (10 Salt-Rounds) */
export async function hashPassword(raw: string) {
  return bcrypt.hash(raw, 10);
}

/** Hash gegen Klartext-Passwort prüfen */
export async function verifyPassword(raw: string, hash: string) {
  return bcrypt.compare(raw, hash);
}

/** Login-Cookie setzen (14 Tage gültig) */
export function setLoginCookie(res: NextApiResponse, email: string) {
  res.setHeader(
    "Set-Cookie",
    `username=${encodeURIComponent(email)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 *
      60 *
      24 *
      14}`,
  );
}

/** Login-Cookie sofort löschen (Logout) */
export function clearLoginCookie(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    "username=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
  );
}
