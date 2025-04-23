// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getDb } from "@/lib/mongo";
import { verifyPassword } from "@/lib/auth";
import cookie from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  const db = await getDb();
  const user = await db.collection("users").findOne<{ password: string }>({ email });

  if (!user || !(await verifyPassword(password, user.password))) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  // 7-Tage-Session-Cookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("username", email, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })
  );

  return res.status(200).json({ msg: "OK" });
}
