import { NextResponse } from "next/server";
import { Client } from "pg";

export const dynamic = "force-dynamic";

const DEFAULT_STUDENT_ID = "demo-alumno";

function db() {
  return new Client({
    connectionString: process.env.DATABASE_URL,
  });
}

export async function GET(req: Request) {
  const client = db();

  try {
    const url = new URL(req.url);
    const studentId = url.searchParams.get("student_id") || DEFAULT_STUDENT_ID;

    await client.connect();

    const result = await client.query(
      `
      SELECT class_id, unlocked
      FROM class_access
      WHERE student_id = $1
      `,
      [studentId]
    );

    await client.end();

    return NextResponse.json({
      ok: true,
      student_id: studentId,
      access: result.rows,
    });
  } catch (err) {
    await client.end();
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
