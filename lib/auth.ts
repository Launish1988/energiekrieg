// lib/auth.ts
import bcrypt from "bcryptjs";

/** Hash ein Klartext-Passwort (10 Rounds). */
export async function hashPassword(plain: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

/** Prüft plain gegen gespeicherten Hash. */
export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}
