// lib/mongo.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options: any = {};

let client: MongoClient;
let db: Db;

/** Liefert eine Singleton-DB-Instanz (serverless-freundlich). */
export async function getDb() {
  if (db) return db;
  client = client ?? new MongoClient(uri, options);
  await client.connect();
  db = client.db(process.env.MONGODB_DB || "energiekrieg");
  return db;
}
