import { NextResponse } from "next/server";
import { Client } from "pg";

export const dynamic = "force-dynamic";

const DEFAULT_STUDENT_ID = "demo-alumno";

function db() {
  return new Client({
    connectionString: process.env.DATABASE_URL,
  });
}

export async function POST(req: Request) {
  const client = db();

  try {
    const body = await req.json();

    const {
      class_id,
      step_id,
      result_link,
      notes,
      completed,
      student_id = DEFAULT_STUDENT_ID,
    } = body;

    await client.connect();

    if (typeof completed === "boolean") {
      await client.query(
        `
        INSERT INTO lesson_progress (class_id, step_id, completed, student_id, updated_at)
        VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
        ON CONFLICT (class_id, step_id)
        DO UPDATE SET
          completed = EXCLUDED.completed,
          student_id = EXCLUDED.student_id,
          updated_at = CURRENT_TIMESTAMP
        `,
        [class_id, step_id, completed, student_id]
      );
    }

    if (typeof result_link === "string" || typeof notes === "string") {
      await client.query(
        `
        INSERT INTO lesson_results (class_id, step_id, result_link, notes, student_id)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [class_id, step_id, result_link || "", notes || "", student_id]
      );
    }

    await client.end();

    return NextResponse.json({ ok: true });
  } catch (err) {
    await client.end();
    return NextResponse.json({ ok: false, error: String(err) });
  }
}

export async function GET(req: Request) {
  const client = db();

  try {
    const url = new URL(req.url);
    const studentId = url.searchParams.get("student_id") || DEFAULT_STUDENT_ID;

    await client.connect();

    const results = await client.query(
      `
      SELECT *
      FROM lesson_results
      WHERE student_id = $1
      ORDER BY created_at DESC
      `,
      [studentId]
    );

    const progress = await client.query(
      `
      SELECT *
      FROM lesson_progress
      WHERE student_id = $1
      ORDER BY updated_at DESC
      `,
      [studentId]
    );

    await client.end();

    return NextResponse.json({
      ok: true,
      student_id: studentId,
      data: results.rows,
      progress: progress.rows,
    });
  } catch (err) {
    await client.end();
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
