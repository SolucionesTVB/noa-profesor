import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("class_id") || "ia-1";

  const result = await pool.query(
    "select class_id, current_block, updated_at from class_sessions where class_id = $1 limit 1",
    [classId]
  );

  if (result.rows.length === 0) {
    return NextResponse.json({ class_id: classId, current_block: 0 });
  }

  return NextResponse.json(result.rows[0]);
}

export async function POST(req: Request) {
  const body = await req.json();
  const classId = body.class_id || "ia-1";
  const currentBlock = Number(body.current_block || 0);

  const result = await pool.query(
    `
    insert into class_sessions (class_id, current_block, updated_at)
    values ($1, $2, now())
    on conflict (class_id)
    do update set current_block = excluded.current_block, updated_at = now()
    returning class_id, current_block, updated_at
    `,
    [classId, currentBlock]
  );

  return NextResponse.json(result.rows[0]);
}
