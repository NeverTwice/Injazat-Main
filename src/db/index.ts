import type { Pool } from "pg";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

let _pool: Pool | null = null;
let _db: NodePgDatabase | null = null;

export function getDb(): NodePgDatabase {
  if (_db) return _db;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Pool: PgPool } = require("pg") as typeof import("pg");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { drizzle } = require("drizzle-orm/node-postgres") as typeof import("drizzle-orm/node-postgres");

  _pool = new PgPool({ connectionString: databaseUrl });
  _db = drizzle(_pool);
  return _db;
}

export function hasDb(): boolean {
  return !!process.env.DATABASE_URL;
}

// Legacy exports for compatibility — these are null-safe
export const pool = null;
export const db = null;
