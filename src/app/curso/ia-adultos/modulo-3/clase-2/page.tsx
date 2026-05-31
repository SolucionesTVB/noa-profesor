"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: de idea a método",
    teacherText:
      "Hoy tomamos la Ficha Maestra y la convertimos en un método paso a paso. Una idea ayuda poco si no se puede explicar en orden.",
    teacherGoal:
      "Que el grupo entienda que una guía útil necesita estructura, no solo contenido.",
    teacherAction:
      "Pida que abran Mi Proyecto NOA y busquen la Ficha Maestra guardada.",
    studentTitle: "Convertir mi experiencia en pasos",
    studentText:
      "Hoy vamos a transformar su Ficha Maestra en una guía práctica.",
    practice: null,
  },
  {
    time: "15–40 min",
    teacherTitle: "Bloque 1: revisar la ficha",
    teacherText:
      "Antes de construir, revisamos si la ficha es clara. Si el tema está débil, todo lo demás sale flojo.",
    teacherGoal:
      "Detectar si el tema tiene público, problema y utilidad clara.",
    teacherAction:
      "Use tres preguntas: ¿a quién ayuda?, ¿qué problema resuelve?, ¿qué resultado entrega?",
    studentTitle: "Revisar mi base",
    studentText:
      "Vamos a revisar si la Ficha Maestra se entiende.",
    practice: {
      theme: "Revisión de base",
      objective:
        "Asegurar que el tema esté claro antes de construir la guía.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Auditoría de ficha",
          instruction:
            "Pegue su Ficha Maestra en ChatGPT.",
          prompt:
            "Revise mi Ficha Maestra NOA como facilitador práctico. Dígame si queda claro: 1) para quién sirve, 2) qué problema resuelve, 3) qué resultado promete, 4) si tiene pasos suficientes, 5) qué parte está floja o confusa. Luego proponga mejoras concretas.",
          example:
            "Mejorar: aclarar más el público objetivo y agregar errores comunes.",
        },
        {
          label: "Mini práctica B",
          title: "Ficha corregida",
          instruction:
            "Pida una versión mejorada.",
          prompt:
            "Con base en esa revisión, mejore mi Ficha Maestra. Manténgala corta, clara y útil. No agregue relleno. Quiero una versión lista para guardar en Mi Proyecto NOA.",
          example:
            "Ficha mejorada con público, problema y pasos más claros.",
        },
      ],
      reflection:
        "Una buena guía nace de una ficha clara. Si la base está desordenada, el resultado también.",
    },
  },
  {
    time: "40–70 min",
    teacherTitle: "Bloque 2: construir los pasos",
    teacherText:
      "El corazón de la guía son los pasos. Aquí convertimos experiencia en método.",
    teacherGoal:
      "Que cada alumno cree una secuencia lógica y fácil de seguir.",
    teacherAction:
      "Explique que los pasos deben ser acciones, no frases bonitas.",
    studentTitle: "Mis pasos principales",
    studentText:
      "Vamos a ordenar su conocimiento en pasos claros.",
    practice: {
      theme: "Método paso a paso",
      objective:
        "Crear la estructura principal de la guía.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Crear pasos",
          instruction:
            "Use su Ficha Maestra como base.",
          prompt:
            "Con base en mi Ficha Maestra NOA, convierta mi tema en una guía de 5 a 7 pasos. Cada paso debe tener: nombre corto, explicación sencilla, acción concreta y resultado esperado. No escriba párrafos largos. Quiero que una persona pueda seguirlo desde el celular.",
          example:
            "Paso 1: Reunir información. Acción: anotar horarios, dosis y nombre de cada medicamento.",
        },
        {
          label: "Mini práctica B",
          title: "Orden lógico",
          instruction:
            "Revise si los pasos tienen sentido.",
          prompt:
            "Revise esos pasos y dígame si están en orden lógico. Señale si falta algún paso, si alguno sobra o si dos pasos deberían unirse. Luego entregue una versión final más ordenada.",
          example:
            "Orden sugerido: primero reunir información, luego separar horarios, luego crear tabla, luego revisar semanalmente.",
        },
      ],
      reflection:
        "Un método bueno hace que otra persona pueda repetir lo que usted sabe.",
    },
  },
  {
    time: "70–95 min",
    teacherTitle: "Bloque 3: errores, advertencias y consejos",
    teacherText:
      "La carne real está aquí. Una guía sin errores comunes parece bonita, pero enseña poco.",
    teacherGoal:
      "Agregar profundidad práctica a la guía.",
    teacherAction:
      "Diga: 'Lo que usted ya aprendió a golpes vale oro para otro.'",
    studentTitle: "Lo que no se debe hacer",
    studentText:
      "Vamos a agregar errores comunes, advertencias y consejos prácticos.",
    practice: {
      theme: "Profundidad práctica",
      objective:
        "Agregar experiencia real a la guía.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Errores comunes",
          instruction:
            "Pida errores y advertencias.",
          prompt:
            "Con base en mi guía, genere una sección de errores comunes y advertencias. Para cada error incluya: qué pasa, por qué es un problema y cómo evitarlo. Use lenguaje sencillo y práctico.",
          example:
            "Error: confiar solo en la memoria. Problema: se olvidan horarios. Cómo evitarlo: usar tabla o recordatorio.",
        },
        {
          label: "Mini práctica B",
          title: "Consejos de experiencia",
          instruction:
            "Pida consejos útiles.",
          prompt:
            "Ahora agregue una sección de consejos prácticos. Quiero consejos reales, simples y aplicables. No use frases genéricas. Cada consejo debe ayudar a evitar problemas o mejorar el resultado.",
          example:
            "Consejo: tome una foto de la tabla y compártala con la familia para que todos tengan la misma información.",
        },
      ],
      reflection:
        "La diferencia entre información y experiencia está en los errores, consejos y advertencias.",
    },
  },
  {
    time: "95–115 min",
    teacherTitle: "Bloque 4: ejemplo práctico",
    teacherText:
      "La guía necesita un ejemplo para que la persona entienda cómo se usa.",
    teacherGoal:
      "Que cada alumno agregue un caso práctico sencillo.",
    teacherAction:
      "Pida que el ejemplo sea realista, no perfecto.",
    studentTitle: "Ejemplo de uso",
    studentText:
      "Vamos a crear un ejemplo práctico para su guía.",
    practice: {
      theme: "Caso práctico",
      objective:
        "Crear un ejemplo que muestre cómo aplicar la guía.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Crear ejemplo",
          instruction:
            "Pida un ejemplo aplicado.",
          prompt:
            "Cree un ejemplo práctico para mi guía. Debe mostrar una situación realista, cómo se aplica la guía paso a paso y qué resultado se obtiene. Use lenguaje fácil de entender.",
          example:
            "Una familia tiene medicamentos mezclados. Aplican la guía, separan horarios, crean tabla y reducen confusión.",
        },
        {
          label: "Mini práctica B",
          title: "Versión lista para guardar",
          instruction:
            "Pida la guía estructurada.",
          prompt:
            "Ahora una todo lo trabajado en una versión ordenada de mi guía: título, para quién sirve, problema que resuelve, pasos, errores comunes, consejos y ejemplo práctico. Déjelo listo para copiar en Mi Proyecto NOA.",
          example:
            "Guía estructurada lista para guardar.",
        },
      ],
      reflection:
        "El ejemplo convierte la guía en algo más fácil de usar y enseñar.",
    },
  },
  {
    time: "115–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Cierre recordando que ya no tienen solo una idea. Tienen un método.",
    teacherGoal:
      "Que guarden la guía estructurada para la próxima clase.",
    teacherAction:
      "Pida guardar la versión final en Mi Proyecto NOA.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su guía estructurada. La próxima clase la convertiremos en material compartible.",
    practice: null,
  },
];


function getTeacherSupport(index: number) {
  const guides = [
    {
      script: "Hoy trabajamos con propósito: convertir experiencia en algo útil. No corra. La clave es que cada persona entienda que lo que sabe puede ayudar a alguien.",
      questions: [
        "¿Qué sabe hacer usted que otra persona le pregunta?",
        "¿Qué experiencia suya podría evitarle problemas a alguien?",
        "¿Qué le gustaría enseñarle a un hijo, nieto, compañero o cliente?",
      ],
      expected: [
        "Que identifiquen experiencia real.",
        "Que no se bloqueen buscando un tema perfecto.",
        "Que entiendan que lo simple también puede ser valioso.",
      ],
      rescue: "Si se quedan fríos, use ejemplos cotidianos: trámites, medicamentos, ventas, cocina, organización, cuidado, celular, documentos o actividades familiares.",
    },
    {
      script: "La IA ayuda, pero primero necesitamos ordenar el pensamiento. Cada bloque debe terminar guardado en Mi Proyecto NOA.",
      questions: [
        "¿Esto se puede guardar?",
        "¿Esto se entiende fuera del chat?",
        "¿Esto le serviría a otra persona?",
      ],
      expected: [
        "Que guarden avances.",
        "Que no dejen todo perdido en ChatGPT.",
        "Que conviertan conversación en producto.",
      ],
      rescue: "Si alguien se pierde, vuelva a la Ficha Maestra: tema, persona, problema, pasos.",
    },
    {
      script: "Recuerde: no buscamos perfección. Buscamos una herramienta útil y mejorable.",
      questions: [
        "¿Qué parte está más clara?",
        "¿Qué parte todavía está floja?",
        "¿Qué ejemplo podría hacerlo más fácil?",
      ],
      expected: [
        "Que acepten mejorar por versiones.",
        "Que no se frustren por no tener todo perfecto.",
        "Que vean progreso.",
      ],
      rescue: "Si alguien quiere empezar de cero, dígale que mejore lo que tiene. NOA construye por capas.",
    },
  ];

  return guides[Math.min(index, guides.length - 1)];
}
export default function Modulo3Clase2Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Módulo 3 · Clase 2</h1>
        <h2 style={subtitle}>De experiencia a método</h2>

        <div style={counter}>
          Bloque {active + 1} de {blocks.length} · {block.time}
        </div>

        <div style={teacherCard}>
          <strong>{block.teacherTitle}</strong>
          <p>{block.teacherText}</p>
        </div>

        <div style={teacherCard}>
          <strong>Objetivo del profesor</strong>
          <p>{block.teacherGoal}</p>
        </div>

        <div style={teacherCardGold}>
          <strong>Qué hacer en clase</strong>
          <p>{block.teacherAction}</p>
        </div>

        <div style={teacherCard}>
          <strong>Guion rápido</strong>
          <p>{support.script}</p>
        </div>

        <div style={teacherCard}>
          <strong>Preguntas para el grupo</strong>
          {support.questions.map((q) => (
            <p key={q}>• {q}</p>
          ))}
        </div>

        <div style={teacherCard}>
          <strong>Qué respuestas buscar</strong>
          {support.expected.map((q) => (
            <p key={q}>• {q}</p>
          ))}
        </div>

        <div style={teacherCardGold}>
          <strong>Si se traban</strong>
          <p>{support.rescue}</p>
        </div>

        <div style={nav}>
          <button style={btn} onClick={() => setActive(Math.max(0, active - 1))}>
            ← Anterior
          </button>
          <button style={btn} onClick={() => setActive(Math.min(blocks.length - 1, active + 1))}>
            Siguiente →
          </button>
        </div>
      </section>

      <section style={student}>
        <div style={kicker}>Pantalla para proyectar</div>
        <h1 style={studentTitle}>{block.studentTitle}</h1>
        <p style={studentText}>{block.studentText}</p>

        {block.practice ? (
          <>
            <PracticeCard {...block.practice} />
            <AiCoach
              bloque={block.teacherTitle}
              tema={block.studentTitle}
              objetivo={block.teacherGoal}
            />
          </>
        ) : (
          <div style={emptyCard}>
            <strong>Momento de clase</strong>
            <p>{block.studentText}</p>
          </div>
        )}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 80% 0%, rgba(34,211,238,.12), transparent 30%), #020617",
  color: "white",
  display: "grid",
  gridTemplateColumns: "34% 66%",
  fontFamily: "Inter, Arial",
};

const teacher = {
  padding: 32,
  borderRight: "1px solid rgba(148,163,184,.18)",
  background: "rgba(2,6,23,.96)",
};

const student = {
  padding: 34,
  display: "grid",
  gap: 22,
  alignContent: "start",
};

const kicker = {
  color: "#22d3ee",
  fontWeight: 900,
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  marginBottom: 16,
};

const title = {
  fontSize: 50,
  margin: 0,
};

const subtitle = {
  fontSize: 26,
  color: "#cbd5e1",
  fontWeight: 400,
  lineHeight: 1.3,
};

const counter = {
  marginTop: 22,
  color: "#67e8f9",
  fontWeight: 900,
};

const studentTitle = {
  fontSize: 54,
  margin: "0 0 8px",
  lineHeight: 1.05,
};

const studentText = {
  color: "#cbd5e1",
  fontSize: 23,
  lineHeight: 1.55,
};

const teacherCard = {
  marginTop: 18,
  background: "rgba(15,23,42,.78)",
  border: "1px solid rgba(34,211,238,.16)",
  borderRadius: 22,
  padding: 20,
  color: "#dbeafe",
  lineHeight: 1.6,
};

const teacherCardGold = {
  marginTop: 18,
  background: "rgba(251,191,36,.08)",
  border: "1px solid rgba(251,191,36,.22)",
  borderRadius: 22,
  padding: 20,
  color: "#fde68a",
  lineHeight: 1.6,
};

const nav = {
  display: "flex",
  gap: 12,
  marginTop: 22,
};

const btn = {
  flex: 1,
  background: "#22d3ee",
  color: "#020617",
  border: "none",
  borderRadius: 16,
  padding: "15px 18px",
  fontWeight: 900,
  cursor: "pointer",
};

const emptyCard = {
  background: "rgba(15,23,42,.75)",
  border: "1px solid rgba(34,211,238,.15)",
  borderRadius: 28,
  padding: 32,
  color: "#dbeafe",
  fontSize: 22,
  lineHeight: 1.7,
};
