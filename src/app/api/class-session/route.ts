import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("class_id") || "ia-1";

  const result = await sql`
  select class_id, current_block, updated_at
  from class_sessions
  where class_id = ${classId}
  limit 1
`;

  if (result.length === 0) {
  return NextResponse.json({ class_id: classId, current_block: 0 });
}

return NextResponse.json(result[0]);
}

export async function POST(req: Request) {
  const body = await req.json();
  const classId = body.class_id || "ia-1";
  const currentBlock = Number(body.current_block || 0);

  const result = await sql`
  insert into class_sessions (class_id, current_block, updated_at)
  values (${classId}, ${currentBlock}, now())
  on conflict (class_id)
  do update set current_block = excluded.current_block, updated_at = now()
  returning class_id, current_block, updated_at
`;

return NextResponse.json(result[0]);
}
