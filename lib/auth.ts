import bcrypt from "bcryptjs";
import type { NextApiResponse } from "next";

export async function hashPassword(raw: string) {
  return bcrypt.hash(raw, 10);
}

export async function verifyPassword(raw: string, hash: string) {
  return bcrypt.compare(raw, hash);
}

export function setLoginCookie(res: NextApiResponse, email: string) {
  res.setHeader(
    "Set-Cookie",
    `username=${encodeURIComponent(email)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 *
      60 * 24 * 14}`,
  );
}

export function clearLoginCookie(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    "username=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
  );
}
