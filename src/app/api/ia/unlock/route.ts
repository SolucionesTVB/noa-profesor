import { NextResponse } from "next/server";
import { Client } from "pg";

function db() {
  return new Client({
    connectionString: process.env.DATABASE_URL,
  });
}

export async function POST(req: Request) {
  const client = db();

  try {
    const { student_id, class_id } = await req.json();

    await client.connect();

    await client.query(
      `
      INSERT INTO class_access (student_id, class_id, unlocked)
      VALUES ($1, $2, true)
      ON CONFLICT (student_id, class_id)
      DO UPDATE SET unlocked = true, updated_at = CURRENT_TIMESTAMP
      `,
      [student_id, class_id]
    );

    await client.end();

    return NextResponse.json({ ok: true });
  } catch (err) {
    await client.end();
    return NextResponse.json({ ok: false });
  }
}
