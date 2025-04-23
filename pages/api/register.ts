// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getDb } from "@/lib/mongo";
import { hashPassword } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "Missing fields" });

  const db = await getDb();
  const users = db.collection("users");

  // exists?
  if (await users.findOne({ email })) {
    return res.status(409).json({ msg: "User exists" });
  }

  const hashed = await hashPassword(password);
  await users.insertOne({ email, password: hashed, createdAt: new Date() });

  return res.status(201).json({ msg: "OK" });
}
