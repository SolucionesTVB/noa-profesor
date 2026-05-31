"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: esto lo hice yo",
    teacherText:
      "Cierre el módulo con orgullo. Hoy no venimos a aprender más. Venimos a probar, mejorar y presentar lo que cada persona construyó.",
    teacherGoal:
      "Que el grupo entienda que el resultado final es una herramienta personal compartible.",
    teacherAction:
      "Diga: 'Hoy cada uno va a salir con algo que puede enseñar.'",
    studentTitle: "Mi herramienta final NOA",
    studentText:
      "Hoy vamos a revisar, mejorar y presentar su guía.",
    practice: null,
  },
  {
    time: "15–35 min",
    teacherTitle: "Bloque 1: revisión final",
    teacherText:
      "Antes de presentar, revisamos claridad, utilidad y orden.",
    teacherGoal:
      "Que cada alumno detecte qué falta antes de mostrar.",
    teacherAction:
      "Pida abrir Mi Proyecto NOA y pegar la guía en ChatGPT.",
    studentTitle: "Revisar antes de presentar",
    studentText:
      "Vamos a revisar si la guía está clara y completa.",
    practice: {
      theme: "Auditoría final",
      objective:
        "Detectar mejoras antes de compartir.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Revisión profesional",
          instruction:
            "Pegue su guía completa.",
          prompt:
            "Revise mi guía como facilitador práctico. Evalúe: 1) si se entiende para quién sirve, 2) si el problema está claro, 3) si los pasos son aplicables, 4) si hay errores comunes suficientes, 5) si el ejemplo ayuda, 6) si el cierre motiva. Señale mejoras concretas.",
          example:
            "Mejorar: agregar un ejemplo más concreto y simplificar el paso 3.",
        },
        {
          label: "Mini práctica B",
          title: "Versión corregida",
          instruction:
            "Pida versión final corregida.",
          prompt:
            "Con base en esa revisión, entregue una versión final mejorada de mi guía. Mantenga lenguaje sencillo, orden claro y enfoque práctico. No agregue relleno.",
          example:
            "Versión final lista para guardar.",
        },
      ],
      reflection:
        "La revisión convierte un borrador en herramienta.",
    },
  },
  {
    time: "35–60 min",
    teacherTitle: "Bloque 2: prueba con otra persona",
    teacherText:
      "La guía debe entenderla otra persona. Si solo la entiende quien la hizo, todavía falta.",
    teacherGoal:
      "Validar utilidad con mirada externa.",
    teacherAction:
      "Haga parejas o mini grupos. Cada uno explica su guía en 60 segundos.",
    studentTitle: "Probar si se entiende",
    studentText:
      "Vamos a probar su guía con otra persona.",
    practice: {
      theme: "Prueba humana",
      objective:
        "Recibir retroalimentación simple.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Preguntas de prueba",
          instruction:
            "Use estas preguntas con otra persona.",
          prompt:
            "Después de mostrar mi guía, quiero hacer tres preguntas: 1) ¿entendió para qué sirve?, 2) ¿qué parte le pareció más útil?, 3) ¿qué parte debería mejorar o aclarar?",
          example:
            "La persona entendió el objetivo, pero pidió más claridad en los pasos.",
        },
        {
          label: "Mini práctica B",
          title: "Mejorar con retroalimentación",
          instruction:
            "Use lo que le dijeron.",
          prompt:
            "Con base en esta retroalimentación: [pegue aquí lo que le dijeron], mejore mi guía sin cambiar su esencia. Aclare lo confuso y refuerce lo más útil.",
          example:
            "Versión más clara después de opinión externa.",
        },
      ],
      reflection:
        "Una herramienta crece cuando alguien más la prueba.",
    },
  },
  {
    time: "60–85 min",
    teacherTitle: "Bloque 3: versión final para compartir",
    teacherText:
      "Ahora dejamos lista la versión final para WhatsApp o Notas.",
    teacherGoal:
      "Que cada alumno tenga un entregable completo y guardado.",
    teacherAction:
      "Pida copiar la versión final en Mi Proyecto NOA.",
    studentTitle: "Mi versión final",
    studentText:
      "Vamos a dejar la guía lista para compartir.",
    practice: {
      theme: "Entrega final",
      objective:
        "Crear versión final limpia.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Formato final",
          instruction:
            "Pida formato limpio.",
          prompt:
            "Prepare mi guía en versión final para compartir por WhatsApp o copiar en Notas. Debe incluir: título, subtítulo, para quién sirve, problema que resuelve, pasos, errores comunes, consejos, ejemplo práctico y cierre. Use formato claro y listas cortas.",
          example:
            "Guía final ordenada.",
        },
        {
          label: "Mini práctica B",
          title: "Mensaje para enviarla",
          instruction:
            "Cree mensaje de acompañamiento.",
          prompt:
            "Escriba un mensaje corto para enviar esta guía a otra persona. Debe sonar humilde, útil y cercano. No quiero sonar como vendedor. Quiero decir que hice esto con ayuda de IA y que quizá le puede servir.",
          example:
            "Hola, preparé esta guía sencilla con ayuda de IA. Pensé que tal vez le podía servir.",
        },
      ],
      reflection:
        "El entregable final no vive en la mente. Vive guardado y listo para compartir.",
    },
  },
  {
    time: "85–110 min",
    teacherTitle: "Bloque 4: presentación final",
    teacherText:
      "Cada persona presenta su herramienta. No es exposición académica. Es mostrar algo propio.",
    teacherGoal:
      "Generar orgullo, cierre y validación.",
    teacherAction:
      "Use formato corto: qué hice, para quién sirve, qué aprendí.",
    studentTitle: "Presentar mi herramienta",
    studentText:
      "Vamos a contar qué creó y para qué sirve.",
    practice: {
      theme: "Presentación NOA",
      objective:
        "Presentar con claridad y orgullo.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Guion final",
          instruction:
            "Prepare su presentación.",
          prompt:
            "Prepare un guion de presentación de 45 segundos para mi guía. Debe decir: 1) cómo se llama, 2) para quién sirve, 3) qué problema resuelve, 4) qué parte me gustó más crear, 5) cómo podría ayudar a alguien.",
          example:
            "Mi guía se llama... sirve para... la hice porque...",
        },
        {
          label: "Mini práctica B",
          title: "Versión emocional",
          instruction:
            "Haga que suene más personal.",
          prompt:
            "Ahora haga ese guion más humano y personal. Que suene como algo que hice con orgullo, no como una exposición escolar.",
          example:
            "Me gustó hacer esto porque me di cuenta de que algo que yo sabía podía servirle a alguien más.",
        },
      ],
      reflection:
        "Presentar lo creado cierra el ciclo: experiencia, IA, herramienta y crecimiento.",
    },
  },
  {
    time: "110–120 min",
    teacherTitle: "Cierre del módulo",
    teacherText:
      "Cierre con frase NOA: 'La IA no hizo esto por usted. Usted dirigió la IA para convertir su experiencia en algo útil.'",
    teacherGoal:
      "Terminar con orgullo y visión de continuidad.",
    teacherAction:
      "Pida que cada persona guarde su guía final y la comparta con una persona esta semana.",
    studentTitle: "Cierre",
    studentText:
      "Usted no solo aprendió IA. Construyó una herramienta con su experiencia.",
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
export default function Modulo3Clase4Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Módulo 3 · Clase 4</h1>
        <h2 style={subtitle}>Presentar, probar y mejorar</h2>

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
