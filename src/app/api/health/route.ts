import { hasDb, getDb } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (!hasDb()) {
      return Response.json({ ok: true, db: false, message: "No database configured" });
    }
    const db = getDb();
    await db.execute(sql`select 1`);
    return Response.json({ ok: true, db: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
