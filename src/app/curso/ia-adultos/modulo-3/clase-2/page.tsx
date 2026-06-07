"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: de Ficha Maestra a Guía Paso a Paso",
    teacherText:
      "Abra con claridad: la Clase 1 terminó con una Ficha Maestra NOA. Hoy no vamos a escoger tema, no vamos a resumir la ficha y no vamos a repetir lo anterior. Hoy vamos a convertir esa ficha en una guía paso a paso desarrollada.",
    teacherGoal:
      "Marcar la diferencia: Clase 1 creó la base; Clase 2 desarrolla el contenido útil.",
    teacherAction:
      "Diga: 'Ya tenemos la semilla. Hoy vamos a convertirla en una guía que otra persona pueda seguir.'",
    studentTitle: "Convertir mi ficha en guía",
    studentText:
      "Hoy vamos a usar su Ficha Maestra NOA para construir una guía paso a paso.",
    practice: null,
  },

  {
    time: "15–30 min",
    teacherTitle: "Bloque 1: pegar la Ficha Maestra sin volver a analizarla",
    teacherText:
      "Este bloque es solo para traer el insumo. La IA no debe resumir la ficha ni volver a preguntar lo mismo. Debe usarla para construir la guía.",
    teacherGoal:
      "Evitar repetir Clase 1 y entrar rápido en producción.",
    teacherAction:
      "Pida abrir ChatGPT y pegar la Ficha Maestra de la clase anterior usando el prompt maestro de Clase 2.",
    studentTitle: "Usar mi resultado anterior",
    studentText:
      "Vamos a pegar la Ficha Maestra solo como base de trabajo.",
    practice: {
      theme: "Punto de partida",
      objective:
        "Usar la Ficha Maestra para construir una guía, sin repetir el ejercicio anterior.",
      practices: [
        {
          label: "Paso A",
          title: "Prompt maestro de Clase 2",
          instruction:
            "Copie este prompt en ChatGPT y pegue debajo su Ficha Maestra.",
          prompt:
            "Voy a trabajar con mi Ficha Maestra NOA de la clase anterior. No quiero que la resuma, no quiero cambiar de tema y no quiero repetir la Clase 1. Use esta ficha únicamente como base para crear una GUÍA PASO A PASO desarrollada. Primero confirme en una sola frase que entendió el tema y luego espere mi instrucción para desarrollar los pasos. Aquí está mi Ficha Maestra: [pegue aquí su Ficha Maestra NOA].",
          example:
            "Entendido. Trabajaremos esa Ficha Maestra para convertirla en una guía paso a paso desarrollada.",
        },
        {
          label: "Paso B",
          title: "Regla de avance",
          instruction:
            "Aclare a ChatGPT que cada respuesta debe aportar contenido nuevo.",
          prompt:
            "Durante esta clase, cada respuesta debe ayudarme a desarrollar contenido nuevo de la guía. No vuelva a preguntarme para quién sirve, qué problema resuelve o por qué puedo explicarlo, salvo que falte información crítica.",
          example:
            "La IA queda enfocada en desarrollar contenido, no en repetir diagnóstico.",
        },
      ],
      reflection:
        "La Ficha Maestra no se vuelve a construir. Se usa para avanzar.",
    },
  },

  {
    time: "30–55 min",
    teacherTitle: "Bloque 2: convertir la ficha en pasos completos",
    teacherText:
      "Aquí empieza la producción real. La guía necesita pasos claros, pero cada paso debe tener explicación, acción y resultado.",
    teacherGoal:
      "Que cada alumno transforme su idea en una secuencia útil.",
    teacherAction:
      "Repita: 'Un paso bueno dice qué hacer, cómo hacerlo y qué se logra.'",
    studentTitle: "Pasos desarrollados",
    studentText:
      "Vamos a crear los pasos principales de su guía.",
    practice: {
      theme: "Pasos completos",
      objective:
        "Crear una secuencia de pasos clara y aplicable.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Crear pasos desarrollados",
          instruction:
            "Copie este prompt.",
          prompt:
            "Con base en mi Ficha Maestra NOA, cree una guía de 5 a 7 pasos. Cada paso debe incluir: 1) nombre del paso, 2) qué debe hacer la persona, 3) cómo hacerlo de forma sencilla, 4) qué debe evitar, 5) qué resultado debería obtener. Escriba para una persona que leerá desde el celular.",
          example:
            "Paso 1: Preparar la información. Qué hacer: reunir lo necesario antes de iniciar. Cómo hacerlo: revisar lo disponible y anotar lo pendiente. Qué evitar: empezar sin claridad. Resultado: tener una base ordenada.",
        },
        {
          label: "Mini práctica B",
          title: "Revisar orden lógico",
          instruction:
            "Pida que revise la secuencia.",
          prompt:
            "Revise los pasos anteriores y mejore el orden. Dígame si falta un paso, si alguno sobra o si alguno está muy general. Luego entregue una versión más clara y ordenada.",
          example:
            "La IA reordena la guía para que tenga inicio, desarrollo y cierre.",
        },
      ],
      reflection:
        "Una guía no es una lista suelta. Es una ruta que otra persona puede seguir.",
    },
  },

  {
    time: "55–80 min",
    teacherTitle: "Bloque 3: agregar ejemplos dentro de la guía",
    teacherText:
      "Sin ejemplos, la guía queda bonita pero débil. Los ejemplos aterrizan la idea y hacen que otra persona entienda cómo usarla.",
    teacherGoal:
      "Agregar aplicación práctica a cada guía.",
    teacherAction:
      "Diga: 'El ejemplo es donde la persona dice: ahora sí entendí.'",
    studentTitle: "Ejemplos que aterrizan",
    studentText:
      "Vamos a agregar ejemplos concretos para que la guía sea más clara.",
    practice: {
      theme: "Ejemplos prácticos",
      objective:
        "Hacer que la guía sea más fácil de entender y aplicar.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Ejemplo por paso",
          instruction:
            "Copie este prompt.",
          prompt:
            "A cada paso de mi guía agréguele un ejemplo práctico. El ejemplo debe mostrar una situación realista donde una persona aplica ese paso. No use ejemplos genéricos. Que se entienda fácil desde celular.",
          example:
            "Ejemplo: una persona revisa primero lo que tiene disponible, anota lo que falta y evita empezar a medias.",
        },
        {
          label: "Mini práctica B",
          title: "Ejemplo completo",
          instruction:
            "Pida un caso completo.",
          prompt:
            "Ahora cree un ejemplo completo de uso de mi guía. Debe mostrar una persona que tiene el problema, aplica los pasos y obtiene un resultado mejor. Manténgalo breve, claro y realista.",
          example:
            "Caso breve con inicio, aplicación de pasos y resultado final.",
        },
      ],
      reflection:
        "Los ejemplos convierten instrucciones en comprensión.",
    },
  },

  {
    time: "80–100 min",
    teacherTitle: "Bloque 4: errores, advertencias y consejos",
    teacherText:
      "Aquí entra la experiencia real. La Clase 1 mencionó errores y consejos de forma inicial. Hoy los desarrollamos para que sean útiles.",
    teacherGoal:
      "Agregar profundidad práctica sin repetir la ficha.",
    teacherAction:
      "Diga: 'Lo que usted ya aprendió puede evitarle dolores de cabeza a otra persona.'",
    studentTitle: "Lo que debe evitarse",
    studentText:
      "Vamos a desarrollar errores comunes, advertencias y consejos prácticos.",
    practice: {
      theme: "Experiencia práctica",
      objective:
        "Convertir la experiencia del alumno en recomendaciones útiles.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Errores desarrollados",
          instruction:
            "Copie este prompt.",
          prompt:
            "Desarrolle una sección de errores comunes para mi guía. Incluya al menos 5 errores. Para cada uno indique: qué suele pasar, por qué afecta el resultado y cómo evitarlo. Use lenguaje práctico.",
          example:
            "Error: empezar sin revisar información. Por qué afecta: genera confusión. Cómo evitarlo: preparar una lista antes de iniciar.",
        },
        {
          label: "Mini práctica B",
          title: "Consejos y advertencias",
          instruction:
            "Copie este prompt.",
          prompt:
            "Agregue una sección de consejos prácticos y advertencias. Quiero consejos accionables, no frases obvias. Cada consejo debe ayudar a que la persona aplique mejor la guía.",
          example:
            "Consejo: guarde una versión corta para revisar antes de aplicar la guía.",
        },
      ],
      reflection:
        "La experiencia se nota en los errores que ayuda a evitar.",
    },
  },

  {
    time: "100–115 min",
    teacherTitle: "Bloque 5: resultado final del día",
    teacherText:
      "Ahora unimos todo en un solo bloque. Este es el entregable de la Clase 2.",
    teacherGoal:
      "Que cada alumno salga con una guía paso a paso desarrollada.",
    teacherAction:
      "Pida copiar únicamente el bloque final llamado RESULTADO FINAL DEL DÍA - GUÍA PASO A PASO.",
    studentTitle: "Mi guía paso a paso",
    studentText:
      "Vamos a crear el resultado final de la Clase 2.",
    practice: {
      theme: "Guía paso a paso",
      objective:
        "Crear el entregable final de la clase.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Unir contenido",
          instruction:
            "Copie este prompt.",
          prompt:
            "Una todo lo trabajado hoy y entregue un bloque final llamado RESULTADO FINAL DEL DÍA - GUÍA PASO A PASO. Debe incluir: título de la guía, introducción breve, pasos desarrollados, ejemplo completo de uso, errores comunes, consejos prácticos, advertencias y cierre. Use formato limpio para copiar y guardar. No agregue explicación fuera del bloque final.",
          example:
            "RESULTADO FINAL DEL DÍA - GUÍA PASO A PASO\nTítulo:\nIntroducción:\nPaso 1...\nEjemplo completo:\nErrores comunes:\nConsejos:\nCierre:",
        },
        {
          label: "Mini práctica B",
          title: "Limpiar versión final",
          instruction:
            "Pida una última mejora.",
          prompt:
            "Revise este resultado final y mejórelo para que sea más claro, más útil y más fácil de leer desde celular. Quite repeticiones y deje una versión final lista para guardar.",
          example:
            "Versión final limpia, ordenada y lista para usar en la Clase 3.",
        },
      ],
      reflection:
        "Clase 1 creó la Ficha Maestra. Clase 2 la convierte en una guía desarrollada.",
    },
  },

  {
    time: "115–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Cierre con continuidad: ya no tienen solo una ficha. Ahora tienen contenido desarrollado.",
    teacherGoal:
      "Preparar la Clase 3: convertir la guía en material compartible.",
    teacherAction:
      "Pida guardar el resultado final de Clase 2.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su RESULTADO FINAL DEL DÍA - GUÍA PASO A PASO. La próxima clase lo convertiremos en material compartible.",
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
      rescue: "Si se quedan fríos, use ejemplos cotidianos: trámites, ventas, cocina, organización, cuidado, uso del celular, documentos, actividades familiares, estudios o experiencia laboral.",
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
        <h2 style={subtitle}>De Ficha Maestra a Guía Paso a Paso</h2>

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
