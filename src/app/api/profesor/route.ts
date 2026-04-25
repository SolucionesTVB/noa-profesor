import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { pregunta } = await req.json();

    const respuesta = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Eres un asistente para un profesor que está dando una clase de IA a adultos mayores.

Tu estilo:
- Respuestas simples
- Ejemplos claros
- Explicaciones prácticas
- Nada técnico
- Máximo 5 líneas

Tu objetivo:
Ayudar al profesor a explicar mejor durante la clase.
          `,
        },
        {
          role: "user",
          content: pregunta,
        },
      ],
    });

    return NextResponse.json({
      ok: true,
      respuesta: respuesta.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Error en IA" });
  }
}
