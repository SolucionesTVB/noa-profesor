"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque NOA: lo que usted sabe vale",
    teacherText:
      "Abra con fuerza: este módulo no trata de aprender más botones ni más prompts. Trata de convertir experiencia personal en una herramienta útil que otra persona pueda usar. La IA no reemplaza lo vivido; ayuda a ordenarlo.",
    teacherGoal:
      "Que el grupo entienda el propósito del módulo: transformar conocimiento propio en una herramienta práctica, compartible y guardable desde celular.",
    teacherAction:
      "Diga: 'Hoy no vamos a hacer una tarea. Vamos a empezar algo que usted pueda enseñar, compartir o dejarle a alguien más.'",
    studentTitle: "Mi experiencia puede ayudar a alguien",
    studentText:
      "Hoy vamos a descubrir algo que usted sabe y convertirlo en la base de una herramienta útil.",
    practice: null,
  },
  {
    time: "15–35 min",
    teacherTitle: "Bloque 1: crear la caja fuerte NOA",
    teacherText:
      "Antes de producir contenido, debemos resolver dónde se guarda. Si todo queda en ChatGPT, se pierde. La caja fuerte puede ser WhatsApp a sí mismo, Notas o un grupo personal llamado Mi Proyecto NOA.",
    teacherGoal:
      "Que todos tengan un lugar simple donde guardar avances sin depender del hilo de ChatGPT.",
    teacherAction:
      "Camine el grupo paso a paso: abrir WhatsApp, crear grupo consigo mismo o usar Notas. El nombre debe ser Mi Proyecto NOA.",
    studentTitle: "Mi Proyecto NOA",
    studentText:
      "Vamos a crear el lugar donde guardaremos la Ficha Maestra durante todo el módulo.",
    practice: {
      theme: "Caja fuerte NOA",
      objective:
        "Crear un lugar simple para guardar el avance del proyecto personal.",
      practices: [
        {
          label: "Paso A",
          title: "Crear el espacio",
          instruction:
            "Abra WhatsApp o Notas y cree un espacio llamado Mi Proyecto NOA.",
          prompt:
            "No use ChatGPT todavía. Cree un espacio en WhatsApp o Notas llamado Mi Proyecto NOA. Ahí guardará su Ficha Maestra y los avances del módulo.",
          example:
            "Mi Proyecto NOA",
        },
        {
          label: "Paso B",
          title: "Pegar plantilla base",
          instruction:
            "Copie esta plantilla en su espacio personal.",
          prompt:
            "MI FICHA MAESTRA NOA\n\nNombre de mi guía:\nPara quién sirve:\nProblema que resuelve:\nPor qué yo puedo explicar esto:\nPasos principales:\nErrores comunes:\nConsejos prácticos:\nEjemplo de uso:\nCómo lo puedo compartir:",
          example:
            "Esta plantilla se irá llenando durante el módulo.",
        },
      ],
      reflection:
        "La IA produce. La Ficha Maestra ordena. WhatsApp o Notas guardan. Sin caja fuerte, el avance se pierde.",
    },
  },
  {
    time: "35–60 min",
    teacherTitle: "Bloque 2: inventario de experiencia",
    teacherText:
      "No les pida inventar un proyecto. Guíelos a descubrir experiencia acumulada: familia, trabajo, trámites, ventas, cocina, cuidado, organización, comunidad, estudio o vida diaria.",
    teacherGoal:
      "Que cada persona encuentre varias ideas reales desde su propia vida.",
    teacherAction:
      "Use ejemplos variados: organizar medicamentos, enseñar WhatsApp a un adulto mayor, ordenar gastos, preparar una venta, cuidar plantas, organizar documentos, hacer un trámite, preparar una actividad comunal.",
    studentTitle: "Lo que yo sé puede servir",
    studentText:
      "Vamos a encontrar ideas desde su experiencia real, no desde la imaginación.",
    practice: {
      theme: "Inventario de experiencia",
      objective:
        "Encontrar ideas que puedan convertirse en una guía útil.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Sacar ideas",
          instruction:
            "Copie este prompt en ChatGPT.",
          prompt:
            "Ayúdeme a descubrir temas útiles que yo podría convertir en una guía práctica. Hágame una lista de 15 ideas basadas en cosas que una persona puede saber por experiencia: trabajo, familia, trámites, ventas, cocina, cuidado de personas, organización del hogar, estudios, comunidad o vida diaria. Para cada idea diga a quién podría ayudar.",
          example:
            "Organizar medicamentos para un adulto mayor, preparar una actividad familiar, ordenar gastos del hogar, enseñar a usar WhatsApp, preparar una venta, organizar documentos importantes.",
        },
        {
          label: "Mini práctica B",
          title: "Elegir tres ideas posibles",
          instruction:
            "Elija tres ideas que sí podría explicar.",
          prompt:
            "De esa lista, ayúdeme a escoger tres temas que podrían convertirse en una guía práctica. Para cada tema indique: a quién ayudaría, qué problema resolvería, qué pasos podría tener y por qué sería útil.",
          example:
            "Tema: organizar documentos familiares. Ayuda a familias que tienen papeles dispersos. Resuelve pérdida de información importante.",
        },
      ],
      reflection:
        "La experiencia muchas veces parece normal porque ya la vivimos. Pero para otra persona puede ser una solución.",
    },
  },
  {
    time: "60–85 min",
    teacherTitle: "Bloque 3: filtro NOA",
    teacherText:
      "Aquí evitamos temas flojos. El tema debe ser útil, claro, enseñable y compartible desde celular.",
    teacherGoal:
      "Que cada persona elija un tema viable, no solo bonito.",
    teacherAction:
      "Repita el filtro: ayuda a alguien, resuelve un problema, tiene pasos, tiene errores comunes, se puede compartir por WhatsApp.",
    studentTitle: "Elegir mi tema ganador",
    studentText:
      "Vamos a escoger el tema que sí puede convertirse en herramienta.",
    practice: {
      theme: "Filtro NOA",
      objective:
        "Escoger el tema con más potencial real.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Evaluar los tres temas",
          instruction:
            "Copie este prompt con sus tres temas.",
          prompt:
            "Evalúe estos tres temas como facilitador de aprendizaje práctico. Para cada tema diga: 1) qué tan útil es, 2) a quién ayuda, 3) qué problema resuelve, 4) si se puede explicar por pasos, 5) qué errores comunes tendría, 6) si se puede compartir por WhatsApp. Al final recomiende el mejor tema y explique por qué.",
          example:
            "Tema ganador: organizar medicamentos, porque tiene pasos claros, ayuda a una familia y resuelve un problema real.",
        },
        {
          label: "Mini práctica B",
          title: "Crear nombre inicial",
          instruction:
            "Pida nombres claros.",
          prompt:
            "Con el tema ganador, proponga 7 nombres sencillos para una guía práctica. El nombre debe ser claro, humano, fácil de entender y útil para compartir por WhatsApp. No use palabras complicadas.",
          example:
            "Guía práctica para organizar medicamentos en casa.",
        },
      ],
      reflection:
        "Un buen tema no es el que suena más grande. Es el que ayuda mejor.",
    },
  },
  {
    time: "85–110 min",
    teacherTitle: "Bloque 4: primera Ficha Maestra NOA",
    teacherText:
      "Ahora el tema se convierte en ficha. No buscamos perfección. Buscamos una primera estructura clara que se pueda guardar y mejorar.",
    teacherGoal:
      "Que cada alumno salga con su primera Ficha Maestra guardada.",
    teacherAction:
      "Haga que copien la versión final en Mi Proyecto NOA. Sin guardar no hay producto.",
    studentTitle: "Mi primera Ficha Maestra",
    studentText:
      "Vamos a ordenar el tema elegido en una ficha clara.",
    practice: {
      theme: "Ficha Maestra NOA",
      objective:
        "Crear la primera versión del entregable del módulo.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Crear ficha",
          instruction:
            "Copie este prompt con su tema ganador.",
          prompt:
            "Convierta mi tema en una Ficha Maestra NOA. Tema: [escriba aquí su tema]. Use este formato: 1) nombre de la guía, 2) para quién sirve, 3) problema que ayuda a resolver, 4) por qué yo puedo explicar esto, 5) pasos principales, 6) errores comunes, 7) consejos prácticos, 8) ejemplo de uso, 9) cómo podría compartirlo. Escriba claro, corto y fácil de entender.",
          example:
            "Nombre: Guía práctica para organizar medicamentos en casa. Sirve para familiares que ayudan a un adulto mayor.",
        },
        {
          label: "Mini práctica B",
          title: "Versión para guardar",
          instruction:
            "Pida una versión limpia.",
          prompt:
            "Ahora deje esa Ficha Maestra en una versión limpia, corta y ordenada para copiarla en WhatsApp o Notas. No agregue explicación adicional. Solo entregue la ficha.",
          example:
            "MI FICHA MAESTRA NOA\nTema: organizar medicamentos...\nPasos: reunir información, separar horarios, revisar semanalmente.",
        },
      ],
      reflection:
        "Hoy no terminamos una guía. Hoy encontramos la semilla de una herramienta personal.",
    },
  },
  {
    time: "110–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Cierre con orgullo: cada persona debe guardar su ficha. Esa ficha será la base de la próxima clase.",
    teacherGoal:
      "Cerrar con entregable claro y continuidad.",
    teacherAction:
      "Pida que revisen que la ficha esté guardada en Mi Proyecto NOA.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su Ficha Maestra NOA. La próxima clase la convertiremos en una guía paso a paso.",
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
export default function Modulo3Clase1Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Módulo 3 · Clase 1</h1>
        <h2 style={subtitle}>Ficha Maestra NOA</h2>

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
