import { NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY no está configurada.");
  }

  return new OpenAI({ apiKey });
}

export async function POST(req: Request) {
  try {
    const { pregunta = "", contexto = {} } = await req.json();

    const client = getClient();

    const completion = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        {
          role: "system",
          content:
            "Usted es el Coach IA en vivo de NOA Profesor para una clase práctica de adultos de 50 años en adelante. Responda en español claro, humano, directo y útil. No dé teoría larga. Dé ejemplos concretos, prompts listos para copiar y mejoras prácticas. El objetivo es que el alumno vea la IA caminando en vivo, no solo leyendo prompts.",
        },
        {
          role: "user",
          content: JSON.stringify({ pregunta, contexto }),
        },
      ],
    });

    return NextResponse.json({
      ok: true,
      respuesta:
        completion.choices[0]?.message?.content ||
        "No pude generar respuesta.",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        respuesta: "No pude consultar la IA en vivo.",
        error: String(error?.message || error),
      },
      { status: 500 }
    );
  }
}
