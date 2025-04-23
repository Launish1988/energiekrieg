import type { NextApiRequest, NextApiResponse } from "next";
import { getDb } from "@/lib/mongo";
import { verifyPassword, setLoginCookie } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Missing fields" });

  const db = await getDb();
  const users = db.collection("users");
  const user = await users.findOne<{ password: string }>({ email });

  if (!user) return res.status(401).json({ msg: "Invalid credentials" });

  const ok = await verifyPassword(password, user.password);
  if (!ok) return res.status(401).json({ msg: "Invalid credentials" });

  setLoginCookie(res, email);
  return res.status(200).json({ msg: "OK" });
}
