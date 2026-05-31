"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: de guía a material compartible",
    teacherText:
      "Hoy tomamos la guía estructurada y la convertimos en algo que otra persona pueda recibir, leer y entender desde WhatsApp o celular.",
    teacherGoal:
      "Que el grupo entienda que una buena guía debe poder compartirse sin explicación larga.",
    teacherAction:
      "Pida abrir Mi Proyecto NOA y buscar la guía estructurada de la clase anterior.",
    studentTitle: "Convertir mi guía en algo que puedo compartir",
    studentText:
      "Hoy vamos a preparar su guía para que otra persona pueda verla y entenderla.",
    practice: null,
  },
  {
    time: "15–40 min",
    teacherTitle: "Bloque 1: versión corta",
    teacherText:
      "Primero creamos una versión corta. Esto sirve para WhatsApp, familia, clientes o compañeros.",
    teacherGoal:
      "Que cada alumno pueda explicar su guía en pocas líneas.",
    teacherAction:
      "Explique que si no se puede resumir, todavía no está clara.",
    studentTitle: "Versión corta",
    studentText:
      "Vamos a resumir su guía sin perder lo importante.",
    practice: {
      theme: "Resumen compartible",
      objective:
        "Crear una versión corta para enviar por WhatsApp.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Resumen en 8 líneas",
          instruction:
            "Pegue su guía estructurada.",
          prompt:
            "Convierta mi guía en una versión corta para compartir por WhatsApp. Máximo 8 líneas. Debe incluir: para quién sirve, qué problema resuelve, los pasos principales y por qué puede ayudar. Use lenguaje humano, sencillo y claro.",
          example:
            "Esta guía ayuda a familias a organizar medicamentos en casa para evitar confusiones con horarios y dosis.",
        },
        {
          label: "Mini práctica B",
          title: "Mensaje de envío",
          instruction:
            "Cree un mensaje para acompañarla.",
          prompt:
            "Ahora escriba un mensaje corto para enviar esta guía por WhatsApp. Debe sonar cercano, sin vender, explicando que es algo útil que preparé con ayuda de IA.",
          example:
            "Hola, preparé esta guía sencilla porque sé que a veces este tema se vuelve confuso. Tal vez le pueda servir.",
        },
      ],
      reflection:
        "La versión corta es la puerta de entrada. Si interesa, la persona pide más.",
    },
  },
  {
    time: "40–70 min",
    teacherTitle: "Bloque 2: versión completa ordenada",
    teacherText:
      "Ahora ordenamos la versión más completa para que sea legible.",
    teacherGoal:
      "Que la guía no sea un bloque de texto cansado.",
    teacherAction:
      "Enfatice títulos, secciones, pasos y claridad visual.",
    studentTitle: "Versión completa",
    studentText:
      "Vamos a ordenar su guía para que sea fácil de leer.",
    practice: {
      theme: "Guía legible",
      objective:
        "Crear una versión completa con buena estructura.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Ordenar formato",
          instruction:
            "Pida formato limpio.",
          prompt:
            "Ordene mi guía en formato claro para lectura en celular. Use títulos, subtítulos, listas cortas y secciones. Debe incluir: título, para quién sirve, problema que resuelve, pasos, errores comunes, consejos, ejemplo práctico y cierre.",
          example:
            "Formato con secciones claras y listas cortas.",
        },
        {
          label: "Mini práctica B",
          title: "Quitar relleno",
          instruction:
            "Pida limpieza.",
          prompt:
            "Revise esta guía y quite relleno, frases repetidas o partes confusas. Mantenga lo útil. Quiero una versión más clara, directa y fácil de compartir.",
          example:
            "Guía limpia, sin paja y más fácil de leer.",
        },
      ],
      reflection:
        "Una guía buena no solo tiene información. Está ordenada para que otra persona pueda usarla.",
    },
  },
  {
    time: "70–90 min",
    teacherTitle: "Bloque 3: portada y título fuerte",
    teacherText:
      "No vamos a diseñar como expertos, pero sí vamos a darle identidad al material.",
    teacherGoal:
      "Crear una presentación inicial que dé orgullo y claridad.",
    teacherAction:
      "Puede usar solo texto o pedir una idea de portada para Canva si alguien lo maneja.",
    studentTitle: "Identidad de mi guía",
    studentText:
      "Vamos a crear un título y una portada sencilla.",
    practice: {
      theme: "Identidad visual",
      objective:
        "Crear título, subtítulo y portada textual.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Título y subtítulo",
          instruction:
            "Pida opciones.",
          prompt:
            "Proponga 10 opciones de título y subtítulo para mi guía. Deben ser claros, humanos, útiles y fáciles de entender. No use títulos exagerados. El subtítulo debe explicar para quién sirve.",
          example:
            "Guía práctica para organizar medicamentos en casa. Subtítulo: una ayuda sencilla para familias que cuidan adultos mayores.",
        },
        {
          label: "Mini práctica B",
          title: "Portada textual",
          instruction:
            "Cree una portada simple.",
          prompt:
            "Cree una portada textual sencilla para mi guía. Incluya título, subtítulo, autor como 'Creado por mí con apoyo de IA' y una frase corta de propósito.",
          example:
            "Cuidar también es ordenar.",
        },
      ],
      reflection:
        "La portada no es lujo. Ayuda a que la persona sienta que creó algo propio.",
    },
  },
  {
    time: "90–115 min",
    teacherTitle: "Bloque 4: cómo explicarla",
    teacherText:
      "Ahora preparamos la explicación oral o escrita. La persona debe poder decir qué hizo y para qué sirve.",
    teacherGoal:
      "Que cada alumno pueda presentar su herramienta con seguridad.",
    teacherAction:
      "Haga que practiquen en voz baja o con un compañero.",
    studentTitle: "Cómo presentar mi guía",
    studentText:
      "Vamos a preparar una explicación corta de su herramienta.",
    practice: {
      theme: "Presentación corta",
      objective:
        "Crear una explicación simple para presentar la guía.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Explicación de 30 segundos",
          instruction:
            "Pida un guion corto.",
          prompt:
            "Escriba una explicación de 30 segundos para presentar mi guía. Debe decir: qué hice, para quién sirve, qué problema resuelve y por qué puede ayudar. Que suene natural, como si se lo contara a un familiar o compañero.",
          example:
            "Preparé una guía sencilla para ayudar a familias a organizar medicamentos en casa y evitar confusiones.",
        },
        {
          label: "Mini práctica B",
          title: "Versión más humana",
          instruction:
            "Mejore el tono.",
          prompt:
            "Ahora haga esa explicación más humana, cercana y sencilla. No quiero que suene como exposición escolar. Quiero que suene como algo que hice con orgullo y quiero compartir.",
          example:
            "Hice esto porque sé que muchas familias se enredan con este tema y una guía simple puede ayudar bastante.",
        },
      ],
      reflection:
        "Cuando una persona puede explicar lo que creó, empieza a apropiarse de su aprendizaje.",
    },
  },
  {
    time: "115–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Hoy ya tienen material compartible. La próxima clase toca probarlo y mejorarlo.",
    teacherGoal:
      "Cerrar con avance guardado.",
    teacherAction:
      "Pida guardar versión corta, versión completa y explicación en Mi Proyecto NOA.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su versión corta, versión completa y explicación. La próxima clase la vamos a probar.",
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
export default function Modulo3Clase3Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Módulo 3 · Clase 3</h1>
        <h2 style={subtitle}>Material compartible</h2>

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
