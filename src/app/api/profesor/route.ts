import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { pregunta = "", contexto = "" } = await req.json();

    const q = String(pregunta).toLowerCase();

    let respuesta = "";

    if (q.includes("imagen") || q.includes("ideogram") || q.includes("foto")) {
      respuesta =
        "Revise 4 puntos: objetivo comercial, producto visible, ambiente coherente y ausencia de texto raro. Si la imagen se ve genérica, mejore el prompt agregando luz, escenario, emoción, estilo visual y qué NO debe aparecer.";
    } else if (q.includes("suno") || q.includes("música") || q.includes("musica") || q.includes("audio")) {
      respuesta =
        "La música debe reforzar la emoción de la campaña. Primero defina la sensación: cálida, moderna, elegante, energética o relajada. Si el resultado no calza, cambie el prompt por emoción + ritmo + uso comercial + duración.";
    } else if (q.includes("pika") || q.includes("video") || q.includes("movimiento")) {
      respuesta =
        "El video debe dirigir la atención, no decorar. Use movimiento suave, enfoque al producto y evite animaciones exageradas. Si el video deforma la imagen, reduzca el movimiento y pida cámara lenta o acercamiento sutil.";
    } else if (q.includes("prompt")) {
      respuesta =
        "Un buen prompt debe tener: objetivo, producto, público, estilo, ambiente, emoción y restricciones. Si el prompt es corto o genérico, el resultado será genérico.";
    } else if (q.includes("alumno") || q.includes("no entiende") || q.includes("confundido")) {
      respuesta =
        "Detenga la herramienta y vuelva al brief. Pregunte: ¿qué queremos lograr?, ¿para quién es?, ¿qué debe sentir la persona?, ¿qué acción queremos provocar? Luego continúe.";
    } else {
      respuesta =
        "Como experto de clase, mi recomendación es volver al objetivo: cliente, producto, público y resultado esperado. Luego revise si la herramienta está ayudando a vender la idea o solo generando algo bonito.";
    }

    return NextResponse.json({
      ok: true,
      contexto,
      respuesta,
    });
  } catch {
    return NextResponse.json({
      ok: false,
      respuesta: "No pude procesar la consulta del experto.",
    });
  }
}
