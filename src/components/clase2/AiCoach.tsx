"use client";

import { useState } from "react";

type Props = {
  bloque: string;
  tema: string;
  objetivo: string;
};

export default function AiCoach({ bloque, tema, objetivo }: Props) {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(question: string) {
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/clase2-coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pregunta: question,
          contexto: {
            clase: "Clase 2 · Comunicación inteligente con IA",
            bloque,
            tema,
            objetivo,
            publico: "Adultos de 50 años en adelante",
            uso: "Celular, ChatGPT, práctica en vivo",
          },
        }),
      });

      const json = await res.json();
      setAnswer(json.respuesta || "Sin respuesta.");
    } catch {
      setAnswer("No pude consultar la IA.");
    }

    setLoading(false);
  }

  return (
    <section style={panel}>
      <div style={label}>IA en vivo</div>

      <h2 style={title}>Coach inteligente de práctica</h2>

      <p style={intro}>
        Use este bloque para que los alumnos vean cómo la IA ayuda en vivo:
        explicar, mejorar, corregir o crear otra versión.
      </p>

      <div style={quickGrid}>
        <button
          style={quickBtn}
          onClick={() =>
            ask("Explique este bloque de forma más sencilla para adultos mayores.")
          }
        >
          Explicar más fácil
        </button>

        <button
          style={quickBtn}
          onClick={() =>
            ask("Deme otro ejemplo práctico diferente para este mismo tema.")
          }
        >
          Otro ejemplo
        </button>

        <button
          style={quickBtn}
          onClick={() =>
            ask("Deme un prompt mejorado listo para copiar sobre este tema.")
          }
        >
          Prompt mejorado
        </button>

        <button
          style={quickBtn}
          onClick={() =>
            ask("Deme una forma de corregir a un alumno si no entiende este ejercicio.")
          }
        >
          Rescate alumno
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Pegue aquí una respuesta del alumno o escriba una duda..."
        rows={5}
        style={textarea}
      />

      <button
        style={mainBtn}
        onClick={() => ask(input || "Deme una mejora práctica para este bloque.")}
      >
        {loading ? "Consultando IA..." : "Consultar IA en vivo"}
      </button>

      {answer && (
        <div style={answerBox}>
          <strong>Respuesta IA</strong>
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}

const panel = {
  background:
    "linear-gradient(135deg, rgba(88,28,135,.35), rgba(8,47,73,.55))",
  border: "1px solid rgba(196,181,253,.28)",
  borderRadius: 30,
  padding: 28,
  boxShadow: "0 24px 70px rgba(0,0,0,.28)",
};

const label = {
  color: "#c4b5fd",
  fontWeight: 950,
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  fontSize: 12,
  marginBottom: 10,
};

const title = {
  color: "white",
  fontSize: 34,
  margin: "0 0 12px",
};

const intro = {
  color: "#ddd6fe",
  fontSize: 18,
  lineHeight: 1.55,
};

const quickGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  marginTop: 18,
};

const quickBtn = {
  background: "rgba(255,255,255,.08)",
  color: "white",
  border: "1px solid rgba(255,255,255,.18)",
  borderRadius: 16,
  padding: "14px 16px",
  fontWeight: 900,
  cursor: "pointer",
};

const textarea = {
  width: "100%",
  marginTop: 18,
  background: "#020617",
  color: "white",
  border: "1px solid rgba(196,181,253,.25)",
  borderRadius: 18,
  padding: 16,
  fontSize: 16,
  lineHeight: 1.5,
};

const mainBtn = {
  width: "100%",
  marginTop: 14,
  background: "linear-gradient(135deg,#8b5cf6,#2563eb)",
  color: "white",
  border: "none",
  borderRadius: 18,
  padding: "16px 18px",
  fontWeight: 950,
  cursor: "pointer",
};

const answerBox = {
  marginTop: 20,
  background: "rgba(2,6,23,.72)",
  border: "1px solid rgba(196,181,253,.25)",
  borderRadius: 22,
  padding: 20,
  color: "#ede9fe",
  lineHeight: 1.7,
  whiteSpace: "pre-wrap" as const,
};
