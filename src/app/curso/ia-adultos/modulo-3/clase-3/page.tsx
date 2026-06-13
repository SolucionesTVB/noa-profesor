"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: hoy convertimos la guía en material compartible",
    teacherText:
      "Abra con claridad: la Clase 2 dejó una GUÍA PASO A PASO desarrollada. Hoy no vamos a rehacerla. Hoy la vamos a convertir en una pieza lista para compartir y además le vamos a sumar una imagen de apoyo y un video corto en Qwen como capa visual.",
    teacherGoal:
      "Separar la Clase 3 de la Clase 2 y dejar claro que el contenido ya existe; hoy se presenta mejor.",
    teacherAction:
      "Diga: 'Primero hacemos el material compartible. Después lo reforzamos con una imagen y un video corto.'",
    studentTitle: "De guía desarrollada a material compartible",
    studentText:
      "Hoy vamos a convertir su guía en una pieza lista para compartir, con apoyo visual.",
    practice: null,
  },

  {
    time: "15–35 min",
    teacherTitle: "Bloque 1: elegir cómo se va a compartir",
    teacherText:
      "El primer paso no es resumir. El primer paso es decidir el formato de salida. Una misma guía puede convertirse en mensaje de WhatsApp, mini guía, imagen, audio o presentación corta.",
    teacherGoal:
      "Que cada alumno entienda que el contenido debe adaptarse al canal y a la persona que lo recibirá.",
    teacherAction:
      "Explique con ejemplos: no es igual compartir con un familiar, con un cliente, con un compañero o con un grupo.",
    studentTitle: "Elegir el formato de mi material",
    studentText:
      "Vamos a decidir cuál es la mejor forma de compartir su guía.",
    practice: {
      theme: "Formato de salida",
      objective:
        "Elegir cómo se va a presentar el material final.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Elegir formato",
          instruction:
            "Copie este prompt y pegue debajo su resultado de Clase 2.",
          prompt:
            "Voy a trabajar con mi RESULTADO FINAL DEL DÍA - GUÍA PASO A PASO. No quiero que la resuma todavía. Quiero que me ayude a decidir cuál es el mejor formato para compartirla. Evalúe estas opciones: 1) mensaje de WhatsApp, 2) mini guía escrita, 3) imagen tipo portada o afiche, 4) audio explicado, 5) presentación corta. Para cada opción diga cuándo conviene usarla y cuál recomienda para mi caso. Aquí está mi guía: [pegue aquí su guía paso a paso].",
          example:
            "Recomendación: mini guía escrita + mensaje de WhatsApp, porque permite compartir el contenido sin explicarlo todo en persona.",
        },
        {
          label: "Mini práctica B",
          title: "Elegir versión principal",
          instruction:
            "Pida que escoja una versión principal.",
          prompt:
            "Con base en esa evaluación, elija una versión principal de mi material para trabajar hoy. Debe empezar así: 'Mi material principal será...' y explicar por qué esa opción es la más útil para compartir.",
          example:
            "Mi material principal será una mini guía escrita para enviar por WhatsApp, porque se puede leer desde el celular y guardar fácilmente.",
        },
      ],
      reflection:
        "Compartir bien no es hacer más texto. Es elegir la forma correcta para que otra persona lo entienda.",
    },
  },

  {
    time: "35–60 min",
    teacherTitle: "Bloque 2: crear la pieza principal",
    teacherText:
      "Ahora sí convertimos la guía desarrollada en una pieza compartible. No es resumen flojo; es una versión adaptada para que otra persona la reciba y la use.",
    teacherGoal:
      "Que cada alumno tenga una primera versión compartible del material.",
    teacherAction:
      "Insista: debe ser claro, útil y fácil de leer desde celular.",
    studentTitle: "Crear mi pieza compartible",
    studentText:
      "Vamos a crear la versión principal de su material.",
    practice: {
      theme: "Pieza principal",
      objective:
        "Transformar la guía desarrollada en material listo para enviar o mostrar.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Crear pieza",
          instruction:
            "Copie este prompt.",
          prompt:
            "Convierta mi GUÍA PASO A PASO desarrollada en mi material principal para compartir. Use el formato elegido. Debe incluir: título claro, breve introducción, contenido principal ordenado, ejemplo breve, recomendación final y cierre humano. Debe ser fácil de leer desde celular y no debe sentirse como tarea escolar.",
          example:
            "Material con título, introducción breve, pasos ordenados, ejemplo y cierre.",
        },
        {
          label: "Mini práctica B",
          title: "Mejorar lectura",
          instruction:
            "Pida una versión más limpia.",
          prompt:
            "Revise este material como si usted fuera la persona que lo recibe por celular. Dígame qué parte está pesada, qué parte sobra, qué parte no se entiende y entregue una versión más clara, directa y fácil de leer.",
          example:
            "Versión más corta, mejor ordenada y menos pesada.",
        },
      ],
      reflection:
        "El material compartible debe ayudar rápido. Si cuesta leerlo, no sirve.",
    },
  },

  {
    time: "60–78 min",
    teacherTitle: "Bloque 3: mensaje de entrega",
    teacherText:
      "Una cosa es tener el material y otra saber cómo entregarlo. El mensaje de entrega ayuda a que la otra persona entienda por qué lo recibe.",
    teacherGoal:
      "Que cada alumno tenga un mensaje corto para acompañar su material.",
    teacherAction:
      "Aclare que el mensaje no debe vender ni sonar grandioso. Debe sonar humano y útil.",
    studentTitle: "Cómo lo voy a enviar",
    studentText:
      "Vamos a crear el mensaje que acompaña su material.",
    practice: {
      theme: "Mensaje de entrega",
      objective:
        "Crear un texto corto para enviar el material por WhatsApp u otro canal.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Mensaje cercano",
          instruction:
            "Copie este prompt.",
          prompt:
            "Escriba un mensaje corto para enviar mi material a otra persona. Debe sonar cercano, humilde y útil. No quiero que suene como venta ni como exposición. Debe explicar que preparé este material con apoyo de IA porque puede ayudar con un tema concreto.",
          example:
            "Hola, preparé esta guía sencilla con apoyo de IA. Tal vez le puede servir porque ordena el tema paso a paso y lo deja más fácil de aplicar.",
        },
        {
          label: "Mini práctica B",
          title: "Tres versiones",
          instruction:
            "Pida versiones por tipo de persona.",
          prompt:
            "Ahora haga tres versiones del mensaje: 1) para un familiar, 2) para un compañero o amigo, 3) para una persona que no conozco tanto. Mantenga tono humano y natural.",
          example:
            "Versión familiar, versión compañero, versión más formal.",
        },
      ],
      reflection:
        "El mensaje de entrega abre la puerta. Si suena raro, la persona ni lee el material.",
    },
  },

  {
    time: "78–98 min",
    teacherTitle: "Bloque 4: imagen de apoyo",
    teacherText:
      "Ahora agregamos una capa visual. No vamos a hacer arte por hacer arte. Vamos a crear una imagen de apoyo que represente el material y ayude a compartirlo mejor.",
    teacherGoal:
      "Que cada alumno salga con un prompt claro para generar una imagen útil y coherente con su material.",
    teacherAction:
      "Explique: primero contenido, después imagen. La imagen acompaña, no reemplaza.",
    studentTitle: "Crear mi imagen de apoyo",
    studentText:
      "Vamos a preparar una imagen sencilla que acompañe el material.",
    practice: {
      theme: "Imagen de apoyo",
      objective:
        "Crear un prompt claro para generar una imagen útil.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Definir la imagen",
          instruction:
            "Copie este prompt.",
          prompt:
            "Ayúdeme a crear un prompt para generar una imagen que acompañe mi material. La imagen debe ser clara, útil y coherente con el contenido. Quiero que proponga: 1) tipo de imagen, 2) escena principal, 3) estilo visual, 4) texto corto opcional, 5) formato recomendado para compartir por celular. Base el prompt en mi material actual.",
          example:
            "Imagen tipo portada vertical, escena sencilla relacionada con la guía, estilo limpio y profesional, texto corto opcional.",
        },
        {
          label: "Mini práctica B",
          title: "Pulir el prompt",
          instruction:
            "Pida una versión más lista para usar.",
          prompt:
            "Ahora convierta esa idea en un prompt final, limpio y listo para copiar en un generador de imágenes. Debe ser claro, específico y fácil de usar.",
          example:
            "Prompt final listo para copiar y generar la imagen.",
        },
      ],
      reflection:
        "La imagen buena acompaña el mensaje. No lo distrae.",
    },
  },

  {
    time: "98–112 min",
    teacherTitle: "Bloque 5: video corto en Qwen",
    teacherText:
      "Ahora damos un paso más: un video corto. No vamos a hacer cine. Vamos a diseñar un video simple, breve y útil para presentar la guía.",
    teacherGoal:
      "Que cada alumno tenga un prompt claro para crear un video corto en Qwen.",
    teacherAction:
      "Aclare: el video debe tener una sola idea, una sola intención y durar pocos segundos.",
    studentTitle: "Crear mi video corto",
    studentText:
      "Vamos a preparar un prompt para un video corto en Qwen.",
    practice: {
      theme: "Video corto Qwen",
      objective:
        "Crear un prompt claro para video corto.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Definir el video",
          instruction:
            "Copie este prompt.",
          prompt:
            "Ayúdeme a crear un prompt para un video corto en Qwen basado en mi material. El video debe durar entre 5 y 8 segundos, en formato vertical 9:16, con una sola idea principal. Defina: 1) escena o secuencia, 2) mensaje central, 3) ambiente visual, 4) texto breve si hace falta, 5) cierre o llamada suave a leer la guía.",
          example:
            "Video vertical corto, una escena principal, mensaje breve y visual limpio.",
        },
        {
          label: "Mini práctica B",
          title: "Prompt final para Qwen",
          instruction:
            "Pida una versión lista para usar.",
          prompt:
            "Convierta esa idea en un prompt final, limpio y listo para usar en Qwen. Debe ser breve, claro y específico. No lo haga complejo. Quiero un video corto, simple y útil.",
          example:
            "Prompt final listo para copiar en Qwen.",
        },
      ],
      reflection:
        "El video corto no reemplaza la guía. Solo atrae, presenta y abre la puerta.",
    },
  },

  {
    time: "112–118 min",
    teacherTitle: "Bloque 6: resultado final del día",
    teacherText:
      "Cerramos uniendo todo en un bloque final. Este es el entregable de la Clase 3.",
    teacherGoal:
      "Que cada alumno salga con material compartible completo, incluyendo imagen y video.",
    teacherAction:
      "Pida copiar únicamente el bloque llamado RESULTADO FINAL DEL DÍA - MATERIAL COMPARTIBLE NOA.",
    studentTitle: "Mi material compartible",
    studentText:
      "Vamos a unir todo en el resultado final de la Clase 3.",
    practice: {
      theme: "Material Compartible NOA",
      objective:
        "Crear el entregable final de la clase.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Unir material",
          instruction:
            "Copie este prompt.",
          prompt:
            "Una todo lo trabajado hoy y entregue un bloque final llamado RESULTADO FINAL DEL DÍA - MATERIAL COMPARTIBLE NOA. Debe incluir: 1) formato elegido, 2) título, 3) subtítulo, 4) pieza principal lista para compartir, 5) mensaje de entrega por WhatsApp, 6) portada textual, 7) idea visual simple, 8) prompt de imagen, 9) prompt de video corto para Qwen, 10) explicación corta de 30 segundos. Use formato limpio para copiar y guardar. No agregue explicación fuera del bloque final.",
          example:
            "RESULTADO FINAL DEL DÍA - MATERIAL COMPARTIBLE NOA\nFormato elegido:\nTítulo:\nPieza principal:\nMensaje de entrega:\nPrompt de imagen:\nPrompt de video corto para Qwen:\nExplicación de 30 segundos:",
        },
        {
          label: "Mini práctica B",
          title: "Pulir versión final",
          instruction:
            "Pida una revisión final.",
          prompt:
            "Revise este resultado final y mejórelo para que sea más claro, más humano y más fácil de compartir desde celular. Quite repeticiones, mantenga lo útil y deje una versión final lista para guardar.",
          example:
            "Versión final lista para llevar a Clase 4.",
        },
      ],
      reflection:
        "Clase 2 desarrolló la guía. Clase 3 la convierte en una pieza que alguien puede recibir y además presentar visualmente.",
    },
  },

  {
    time: "118–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Cierre con continuidad: ya tienen material compartible, imagen y prompt de video corto. La próxima clase no vamos a crear desde cero; vamos a probar, mejorar y presentar.",
    teacherGoal:
      "Preparar la Clase 4.",
    teacherAction:
      "Pida guardar el resultado final de Clase 3.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su RESULTADO FINAL DEL DÍA - MATERIAL COMPARTIBLE NOA. La próxima clase lo vamos a probar, mejorar y presentar.",
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
      rescue: "Si alguien se pierde, vuelva al resultado de Clase 2: guía paso a paso, ejemplos, errores, consejos y cierre.",
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
        <h2 style={subtitle}>Material Compartible NOA</h2>

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
