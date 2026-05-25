"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: caos operativo real",
    teacherText:
      "Hoy no vamos a trabajar casos pequeños. Vamos a trabajar como si fuéramos parte de una corredora que tiene demasiados mensajes, clientes esperando respuesta, pagos pendientes y tareas mezcladas.",
    teacherGoal:
      "Que el grupo entienda que la IA puede ayudar a ordenar operación real y no solo escribir mensajes.",
    teacherAction:
      "Explique el caso completo antes de empezar. Todos trabajarán sobre la misma empresa.",
    studentTitle: "Caso operativo NOA",
    studentText:
      "Una corredora recibe demasiados mensajes diarios sobre pólizas, pagos, inspecciones y documentos pendientes. Todo está mezclado entre WhatsApp, notas y correos.",
    practice: null,
  },
  {
    time: "15–35 min",
    teacherTitle: "Bloque 1: ordenar el caos",
    teacherText:
      "En este bloque NO vamos a pedir respuestas rápidas. Vamos a enseñar cómo construir un prompt profesional paso a paso para que la IA piense como consultor operativo.",
    teacherGoal:
      "Que entiendan cómo contexto, rol y estructura cambian completamente la calidad de la respuesta.",
    teacherAction:
      "Pida comparar cómo distintas IA organizan el mismo problema.",
    studentTitle: "Organizar operación",
    studentText:
      "Vamos a comparar prompts malos contra prompts bien estructurados para entender cómo dirigir mejor una IA.",
    practice: {
      theme: "Orden operativo",
      objective:
        "Separar problemas, riesgos y próximos pasos.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Diagnóstico operativo",
          instruction:
            "Copie este prompt exactamente igual.",
          prompt:
            "Primero compare estos dos prompts y explique cuál produciría una mejor respuesta y por qué. Prompt A: Ayúdeme con una corredora que tiene muchos mensajes. Prompt B: Usted es un consultor operativo especializado en corredoras de seguros. Analice una corredora mediana con alto volumen de WhatsApp, clientes preguntando por pólizas, pagos pendientes, inspecciones y documentos faltantes. La información está dispersa entre WhatsApp, correos y notas. Necesito un diagnóstico operativo dividido en: problemas principales, causas probables, riesgos para el cliente, riesgos para el negocio y acciones recomendadas para hoy. Explique qué elementos hacen que el Prompt B sea superior.",
          example:
            "Problemas principales: información dispersa y seguimiento inconsistente. Riesgos: clientes molestos y atrasos. Acciones: centralizar seguimiento y priorizar casos urgentes.",
        },
        {
          label: "Mini práctica B",
          title: "Priorizar tareas",
          instruction:
            "Ahora vamos a pedir prioridades.",
          prompt:
            "Ahora use el Prompt B como base y genere una lista priorizada para resolver hoy. Use este formato obligatorio: 1) Prioridad alta: tareas que afectan clientes o dinero. 2) Prioridad media: tareas que afectan seguimiento o servicio. 3) Prioridad baja: tareas administrativas. Para cada tarea indique: qué hacer, por qué importa, quién debería hacerlo y qué mensaje corto se podría enviar al cliente.",
          example:
            "Prioridad alta: clientes esperando documentos urgentes. Prioridad media: seguimiento de pagos. Prioridad baja: reorganización de notas internas.",
        },
      ],
      reflection:
        "La IA empieza a ser poderosa cuando ayuda a ordenar antes de ejecutar.",
    },
  },
  {
    time: "35–55 min",
    teacherTitle: "Bloque 2: resumir y responder",
    teacherText:
      "Ahora convertimos información larga en respuestas claras y accionables.",
    teacherGoal:
      "Que aprendan a ahorrar tiempo leyendo, entendiendo y respondiendo.",
    teacherAction:
      "Explique que el objetivo no es responder rápido, sino responder claro.",
    studentTitle: "Resumir para actuar",
    studentText:
      "Vamos a convertir información larga en decisiones y respuestas.",
    practice: {
      theme: "Resumen operativo",
      objective:
        "Transformar mensajes largos en acciones concretas.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Resumen ejecutivo",
          instruction:
            "Copie exactamente este prompt.",
          prompt:
            "Actúe como analista operativo de atención al cliente en una corredora de seguros.\n\nAnalice esta conversación:\n\nCliente:\nBuenos días, envié los documentos hace dos días y todavía no entiendo si mi póliza ya quedó activa. Además me dijeron que faltaba algo, pero nadie me explica qué documento es.\n\nAsesor:\nEstamos revisando el caso.\n\nCliente:\nNecesito resolverlo hoy porque tengo una reunión mañana y me preocupa no tener cobertura activa.\n\nAsesor:\nPermítame validar nuevamente.\n\nCon base en esta conversación:\n\n1. Identifique el problema principal\n2. Detecte información faltante\n3. Señale riesgos de mala experiencia\n4. Determine el nivel de urgencia\n5. Recomiende próxima acción operativa\n\nUse lenguaje ejecutivo, claro y operativo.",
          example:
            "Problema principal: cliente no entiende documentos pendientes. Próxima acción: enviar lista clara y confirmar recepción.",
        },
        {
          label: "Mini práctica B",
          title: "Respuesta profesional",
          instruction:
            "Ahora convierta el resumen en respuesta.",
          prompt:
            "Con base en el análisis anterior, redacte una respuesta de WhatsApp para el cliente. Debe cumplir estas reglas: 1) reconocer la preocupación del cliente, 2) explicar que se está ordenando el caso, 3) indicar qué información falta sin inventarla, 4) prometer seguimiento sin dar tiempos falsos, 5) sonar claro, humano y profesional. Máximo 5 líneas.",
          example:
            "Hola, ya revisamos su caso. En este momento solo necesitamos confirmar los documentos pendientes para continuar el proceso correctamente.",
        },
      ],
      reflection:
        "La IA puede ahorrar muchísimo tiempo cuando convierte información en claridad.",
    },
  },
  {
    time: "55–75 min",
    teacherTitle: "Bloque 3: crear un asistente operativo",
    teacherText:
      "Aquí transformamos la IA en una herramienta de trabajo repetible.",
    teacherGoal:
      "Que construyan un mini asistente operativo para la corredora.",
    teacherAction:
      "Explique que no buscamos prompts aislados; buscamos sistemas repetibles.",
    studentTitle: "Asistente NOA",
    studentText:
      "Vamos a convertir la IA en un asistente operativo.",
    practice: {
      theme: "Asistente operativo",
      objective:
        "Crear una instrucción reutilizable para tareas reales.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Diseñar el asistente",
          instruction:
            "Copie este prompt completo.",
          prompt:
            "Vamos a construir un asistente operativo reutilizable. Usted actuará como asistente interno de una corredora de seguros en Costa Rica. Su tarea será revisar mensajes de clientes, detectar pendientes, clasificar urgencia, identificar riesgos de mala experiencia y proponer respuestas claras. Antes de responder, siempre debe entregar este formato: 1) resumen del caso, 2) datos faltantes, 3) prioridad alta/media/baja, 4) riesgo principal, 5) acción recomendada, 6) mensaje sugerido para el cliente. No debe inventar información ni prometer tiempos no confirmados.",
          example:
            "Asistente preparado para ordenar pendientes, riesgos y próximos pasos.",
        },
        {
          label: "Mini práctica B",
          title: "Probar el asistente",
          instruction:
            "Ahora dele un caso real.",
          prompt:
            "Pruebe el asistente con este caso: Cliente escribe por WhatsApp: 'Buenos días, ya envié lo que me pidieron y sigo sin entender si mi póliza está activa o no. Me preocupa porque necesito estar cubierto esta semana y cada vez me dicen algo diferente.' Aplique el formato obligatorio del asistente: resumen, datos faltantes, prioridad, riesgo, acción recomendada y mensaje sugerido.",
          example:
            "Problema principal: falta de claridad. Acción recomendada: explicar estado actual y próximos pasos.",
        },
      ],
      reflection:
        "La IA deja de ser juguete cuando se convierte en sistema de trabajo.",
    },
  },
  {
    time: "75–95 min",
    teacherTitle: "Bloque 4: detectar errores y riesgos",
    teacherText:
      "La IA también puede equivocarse, exagerar o responder sin criterio.",
    teacherGoal:
      "Que aprendan a revisar respuestas antes de usarlas.",
    teacherAction:
      "Pida detectar frases peligrosas, promesas falsas o respuestas poco humanas.",
    studentTitle: "Control humano",
    studentText:
      "Vamos a revisar respuestas antes de enviarlas.",
    practice: {
      theme: "Auditoría IA",
      objective:
        "Detectar riesgos en respuestas generadas.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Auditar respuesta",
          instruction:
            "Copie este prompt.",
          prompt:
            "Actúe como supervisor operativo de una corredora. Revise esta respuesta generada por IA: 'Estimado cliente, no se preocupe, su póliza quedará lista pronto y nuestro equipo garantiza una solución rápida y efectiva.' Evalúe la respuesta con estos criterios: 1) promesas no verificadas, 2) falta de claridad, 3) riesgo legal o comercial, 4) tono poco humano, 5) información faltante. Luego explique cómo mejorarla.",
          example:
            "Riesgo: prometer tiempos que no se han confirmado.",
        },
        {
          label: "Mini práctica B",
          title: "Versión corregida",
          instruction:
            "Ahora pida una versión segura.",
          prompt:
            "Reescriba la respuesta anterior de forma más responsable. Debe: 1) reconocer la preocupación del cliente, 2) evitar prometer tiempos no confirmados, 3) explicar que se verificará el estado real, 4) pedir o confirmar la información necesaria, 5) cerrar con tono humano y profesional. Máximo 5 líneas.",
          example:
            "Estamos revisando su caso para darle una actualización correcta y clara lo antes posible.",
        },
      ],
      reflection:
        "La IA acelera procesos. El criterio humano protege la operación.",
    },
  },
  {
    time: "95–115 min",
    teacherTitle: "Bloque 5: simulación final NOA",
    teacherText:
      "Ahora trabajamos como equipo operativo real.",
    teacherGoal:
      "Que el alumno sienta que puede usar IA en operación diaria real.",
    teacherAction:
      "Pida que cada persona resuelva el caso completo usando lo aprendido.",
    studentTitle: "Simulación ejecutiva",
    studentText:
      "Ahora vamos a resolver un caso operativo completo.",
    practice: {
      theme: "Resolución integral",
      objective:
        "Aplicar IA para ordenar, responder y priorizar.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Resolver el caso",
          instruction:
            "Copie exactamente este prompt.",
          prompt:
            "Actúe como encargado operativo de una corredora de seguros durante una mañana de alta carga. Situación: hay 18 mensajes de WhatsApp sin clasificar, 6 clientes preguntan por estado de póliza, 4 casos tienen documentos pendientes, 3 clientes preguntan por pagos y 2 clientes están molestos porque no han recibido respuesta clara. No hay más personal disponible y todo debe organizarse desde el celular. Cree un plan de acción para hoy con este formato: 1) diagnóstico rápido, 2) prioridades de las próximas 2 horas, 3) tareas por tipo de caso, 4) mensajes modelo para clientes, 5) riesgos que deben evitarse, 6) qué dejar documentado para mañana.",
          example:
            "Prioridad 1: clientes con pagos urgentes. Prioridad 2: documentos pendientes. Prioridad 3: reorganizar seguimiento.",
        },
        {
          label: "Mini práctica B",
          title: "Cierre ejecutivo",
          instruction:
            "Ahora prepare el cierre del día.",
          prompt:
            "Con base en el plan anterior, prepare un resumen ejecutivo para el gerente. Debe incluir: 1) situación encontrada, 2) acciones tomadas hoy, 3) casos críticos, 4) pendientes para mañana, 5) recomendación para evitar que el problema se repita. Use tono ejecutivo, claro y sin exagerar.",
          example:
            "Se organizaron casos urgentes, se respondió a clientes prioritarios y quedaron pendientes documentos específicos para seguimiento.",
        },
      ],
      reflection:
        "Aquí la IA deja de ser teoría y se convierte en herramienta de crecimiento real.",
    },
  },
  {
    time: "115–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Hoy no aprendieron solo prompts. Aprendieron a usar IA para ordenar operación, tomar decisiones y trabajar con más claridad.",
    teacherGoal:
      "Cerrar el mes con sensación de capacidad real.",
    teacherAction:
      "Pida guardar los mejores prompts y reflexionar cómo aplicar esto en trabajo real.",
    studentTitle: "Cierre",
    studentText:
      "La IA no reemplaza personas. Potencia personas que aprenden a dirigir mejor su trabajo.",
    practice: null,
  },
];

function getTeacherSupport(index: number) {
  const guides = [
    {
      script: "Hoy no vamos a aprender botones. Vamos a aprender a hablarle mejor a la IA para que nos ayude a comunicar mejor.",
      questions: [
        "¿Qué mensaje usted borra apenas lo ve?",
        "¿Qué hace que un mensaje se sienta confiable?",
        "¿Qué diferencia hay entre escribir bonito y comunicar bien?",
      ],
      expected: [
        "Que mencionen claridad, confianza y cercanía.",
        "Que entiendan que la IA necesita intención.",
        "Que no se queden solo en 'me gusta' o 'no me gusta'.",
      ],
      rescue: "Si se quedan callados, use un ejemplo cotidiano: un mensaje de banco, un mensaje de médico o un mensaje de WhatsApp que nadie entiende.",
    },
    {
      script: "Vamos a crear una primera versión. No buscamos perfección. Buscamos tener algo para mejorar.",
      questions: [
        "¿Este mensaje suena como una persona real?",
        "¿Se entiende rápido qué ofrece el contador?",
        "¿Qué parte le da confianza?",
      ],
      expected: [
        "Que vean si el texto es claro.",
        "Que detecten si suena frío.",
        "Que empiecen a comparar tono profesional vs tono humano.",
      ],
      rescue: "Si alguien no logra avanzar, dígale que copie el texto tal cual. Primero hacemos, luego corregimos.",
    },
    {
      script: "Ahora vamos a mejorar sin empezar de cero. Aquí es donde la IA empieza a trabajar mejor.",
      questions: [
        "¿Cuál versión le hablaría mejor a una persona preocupada?",
        "¿Qué palabra cambió la emoción del mensaje?",
        "¿La segunda versión se siente más cercana?",
      ],
      expected: [
        "Que identifiquen palabras como tranquilidad, confianza, claridad.",
        "Que entiendan que mejorar es dirigir.",
        "Que noten que la emoción cambia el mensaje.",
      ],
      rescue: "Si dicen que ambas versiones son iguales, pida que lean solo la primera línea de cada una y comparen sensación.",
    },
    {
      script: "Cambiamos de caso. Si entendimos la lógica, podemos usarla en otro mundo.",
      questions: [
        "¿Qué siente una familia cuando busca casa?",
        "¿Qué palabras transmiten tranquilidad?",
        "¿Qué frase evitaría porque suena a anuncio barato?",
      ],
      expected: [
        "Que digan confianza, seguridad, acompañamiento.",
        "Que eviten frases exageradas.",
        "Que adapten emoción al caso.",
      ],
      rescue: "Si copian el estilo del contador, recuérdeles que ahora la emoción no es estrés financiero, es tranquilidad familiar.",
    },
    {
      script: "Premium no es hablar raro. Premium es sonar claro, sobrio y confiable.",
      questions: [
        "¿Esto suena elegante o solo largo?",
        "¿Qué frase suena falsa?",
        "¿Qué quitaría para que se vea más serio?",
      ],
      expected: [
        "Que detecten exageraciones.",
        "Que entiendan que menos puede ser mejor.",
        "Que vean diferencia entre elegante y recargado.",
      ],
      rescue: "Si sale muy adornado, pida: quite frases exageradas y hágalo más sobrio.",
    },
    {
      script: "Ahora tomamos conocimiento profesional y lo volvemos fácil de entender.",
      questions: [
        "¿Una persona sin conocimiento legal entendería esto?",
        "¿Qué palabra está difícil?",
        "¿El mensaje ayuda o solo impresiona?",
      ],
      expected: [
        "Que bajen tecnicismos.",
        "Que busquen utilidad.",
        "Que entiendan que explicar simple es una habilidad.",
      ],
      rescue: "Si el texto queda muy técnico, use la frase: explíquelo como si se lo dijera a un vecino.",
    },
    {
      script: "Aquí limpiamos el texto. La IA puede sonar muy bonita, pero vacía.",
      questions: [
        "¿Qué frase suena robótica?",
        "¿Qué parte sobra?",
        "¿Qué se puede decir más simple?",
      ],
      expected: [
        "Que identifiquen frases genéricas.",
        "Que quiten promesas falsas.",
        "Que aprendan a no aceptar todo lo que la IA da.",
      ],
      rescue: "Si no detectan nada, señale frases comunes: 'la mejor opción', 'calidad garantizada', 'servicio excepcional'.",
    },
    {
      script: "Ahora cada uno lo lleva a su mundo. Aquí se demuestra que aprendimos.",
      questions: [
        "¿Qué tema suyo podría explicar mejor con IA?",
        "¿A quién quiere ayudar con ese mensaje?",
        "¿Dónde podría usarlo esta semana?",
      ],
      expected: [
        "Que elijan un caso real.",
        "Que no se queden en ejemplos del profesor.",
        "Que salgan con algo usable.",
      ],
      rescue: "Si alguien no sabe qué usar, dele opciones: trabajo, familia, hobby, consejo, servicio o experiencia personal.",
    },
    {
      script: "No cerramos con teoría. Cerramos con algo guardado y listo para usar.",
      questions: [
        "¿Cuál fue su mejor mensaje?",
        "¿Dónde lo guardó?",
        "¿Dónde podría usarlo esta semana?",
      ],
      expected: [
        "Que tengan una versión final.",
        "Que la guarden.",
        "Que salgan con sensación de logro.",
      ],
      rescue: "Si quieren seguir corrigiendo, diga: mejor listo hoy que perfecto nunca.",
    },
  ];

  return guides[Math.min(index, guides.length - 1)];
}

export default function Clase4Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Clase 4</h1>
        <h2 style={subtitle}>IA para productividad y trabajo real</h2>

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
