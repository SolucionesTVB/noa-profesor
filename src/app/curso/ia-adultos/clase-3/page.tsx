"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: de comunicar a vender sin sonar vendedor",
    teacherText:
      "La clase anterior trabajamos comunicación inteligente. Hoy subimos nivel: vamos a usar IA para crear mensajes, publicaciones y respuestas que ayuden a vender, generar confianza y abrir conversaciones reales.",
    teacherGoal:
      "Que el grupo entienda que vender con IA no es sonar agresivo; es comunicar mejor el valor de algo.",
    teacherAction:
      "Pregunte: ¿qué mensaje de venta usted borra de inmediato? ¿Qué mensaje sí le daría ganas de responder?",
    studentTitle: "IA para contenido y ventas reales",
    studentText:
      "Hoy vamos a crear mensajes que una persona real pueda leer, entender y responder.",
    practice: null,
  },

  {
    time: "15–35 min",
    teacherTitle: "Bloque 1: WhatsApp que no parece spam",
    teacherText:
      "Empezamos con el canal más cotidiano: WhatsApp. El reto es crear un mensaje corto, claro y humano, sin presión ni frases de vendedor desesperado.",
    teacherGoal:
      "Que aprendan a usar IA para iniciar conversaciones comerciales sin sonar invasivos.",
    teacherAction:
      "Pida comparar un mensaje vendedor genérico contra uno consultivo. Pregunta clave: ¿cuál respondería usted?",
    studentTitle: "WhatsApp que abre conversación",
    studentText:
      "Vamos a crear un mensaje corto para ofrecer algo sin parecer spam.",
    practice: {
      theme: "WhatsApp consultivo",
      objective:
        "Crear un mensaje de WhatsApp que genere confianza y abra conversación.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Mensaje inicial",
          instruction:
            "Copie este prompt en ChatGPT. Complete solo lo que está entre corchetes.",
          prompt:
            "Ayúdame a escribir un mensaje corto de WhatsApp para ofrecer [producto o servicio]. Quiero escribirle a una persona que podría necesitarlo, pero no quiero sonar insistente ni vendedor. Que el mensaje sea claro, humano, respetuoso y fácil de responder.",
          example:
            "Hola, espero que esté muy bien. Le escribo porque estoy ayudando a personas a ordenar mejor sus procesos con herramientas sencillas de IA. Si en algún momento le interesa revisar cómo podría aplicarlo en su trabajo, con gusto le comparto una idea concreta.",
        },
        {
          label: "Mini práctica B",
          title: "Versión más natural",
          instruction:
            "Ahora mejore el mensaje para que suene menos comercial y más conversacional.",
          prompt:
            "Ahora mejore ese mensaje para que suene más natural, como una conversación real de WhatsApp. Quite frases que suenen a venta, presión o publicidad. Quiero que invite a responder sin incomodar.",
          example:
            "Hola, ¿cómo está? He estado trabajando formas simples de usar IA para ahorrar tiempo en tareas diarias. Si le sirve, puedo compartirle una idea concreta aplicada a su caso, sin compromiso.",
        },
      ],
      reflection:
        "Un buen mensaje de WhatsApp no empuja. Abre una puerta. La IA ayuda, pero el criterio humano evita que suene a spam.",
    },
  },

  {
    time: "35–55 min",
    teacherTitle: "Bloque 2: publicaciones que generan atención",
    teacherText:
      "Ahora pasamos de mensaje privado a contenido público. El objetivo no es publicar por publicar; es lograr que alguien se detenga, entienda y quiera saber más.",
    teacherGoal:
      "Que construyan una publicación corta con gancho, claridad y utilidad.",
    teacherAction:
      "Pida revisar si el primer renglón hace que alguien siga leyendo. Si no engancha, se pierde.",
    studentTitle: "Publicaciones que sí se leen",
    studentText:
      "Vamos a crear una publicación corta para redes que tenga idea, claridad y utilidad.",
    practice: {
      theme: "Contenido para redes",
      objective:
        "Crear una publicación simple que capte atención sin sonar exagerada.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Publicación base",
          instruction:
            "Copie el prompt y complete el tipo de negocio, trabajo o tema.",
          prompt:
            "Ayúdame a escribir una publicación corta para redes sobre [tema, negocio o servicio]. Quiero que empiece con una frase que llame la atención, explique una idea útil y termine invitando a la persona a comentar o escribirme. Que suene humano, claro y profesional.",
          example:
            "No todo problema de tiempo se resuelve trabajando más. A veces se resuelve ordenando mejor las tareas repetitivas. La IA puede ayudarle a crear mensajes, resumir información y preparar ideas más rápido, pero siempre con criterio humano. ¿Qué tarea le quita más tiempo en su día?",
        },
        {
          label: "Mini práctica B",
          title: "Mejorar el gancho",
          instruction:
            "Ahora pida 5 opciones de primera frase y elija la mejor.",
          prompt:
            "Deme 5 opciones de primera frase para esta publicación. Quiero que sean cortas, directas y que hagan que una persona quiera seguir leyendo. No use frases exageradas ni promesas falsas.",
          example:
            "Trabajar más horas no siempre significa avanzar más.",
        },
      ],
      reflection:
        "El primer renglón decide si la persona sigue leyendo. La IA puede generar opciones, pero usted decide cuál tiene más fuerza.",
    },
  },

  {
    time: "55–75 min",
    teacherTitle: "Bloque 3: enseñarle a la IA quién es el cliente",
    teacherText:
      "Aquí viene el salto de calidad. La mayoría pide textos genéricos porque no le explica a la IA quién es la persona que va a leer. Hoy le damos contexto real.",
    teacherGoal:
      "Que aprendan a definir cliente, problema, emoción y objetivo antes de pedir contenido.",
    teacherAction:
      "Use la frase: la IA no adivina su mercado; usted debe darle contexto.",
    studentTitle: "Cliente claro, mensaje mejor",
    studentText:
      "Vamos a explicarle a la IA para quién estamos escribiendo antes de pedirle el mensaje.",
    practice: {
      theme: "Contexto del cliente",
      objective:
        "Crear mejores respuestas dando contexto claro sobre la persona objetivo.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Definir cliente",
          instruction:
            "Complete los espacios y copie el prompt.",
          prompt:
            "Antes de escribir un mensaje, ayúdeme a ordenar este contexto: vendo u ofrezco [producto o servicio]. Mi cliente ideal es [tipo de persona]. Su principal problema es [problema]. Lo que más le preocupa es [preocupación]. Quiero que el mensaje logre [objetivo]. Con esa información, dígame qué tono y enfoque debería usar.",
          example:
            "Tono recomendado: claro, cercano y práctico. Enfoque: mostrar que se entiende el problema de la persona y ofrecer una solución simple sin presionar.",
        },
        {
          label: "Mini práctica B",
          title: "Crear mensaje con contexto",
          instruction:
            "Ahora use el contexto anterior para pedir una versión final.",
          prompt:
            "Con base en ese contexto, escriba un mensaje corto para esa persona. Que se sienta específico, humano y útil. Evite frases genéricas, promesas exageradas o lenguaje de anuncio.",
          example:
            "Sé que muchas veces el problema no es falta de ganas, sino falta de orden para avanzar. Por eso estoy ayudando a personas a simplificar tareas repetitivas usando IA de forma práctica y fácil de aplicar.",
        },
      ],
      reflection:
        "Cuando la IA conoce el contexto, deja de escribir para todo el mundo y empieza a escribir para alguien específico.",
    },
  },

  {
    time: "75–95 min",
    teacherTitle: "Bloque 4: detectar vendedor barato",
    teacherText:
      "Este bloque desarrolla criterio. La IA puede inventar textos que suenan inflados, urgentes o falsos. Aquí aprendemos a limpiar eso.",
    teacherGoal:
      "Que detecten exageraciones, presión innecesaria y frases comerciales vacías.",
    teacherAction:
      "Pida buscar palabras sospechosas: increíble, único, imperdible, garantizado, la mejor opción.",
    studentTitle: "Limpiar textos vendedores",
    studentText:
      "Vamos a corregir textos que suenan exagerados o poco confiables.",
    practice: {
      theme: "Anti venta barata",
      objective:
        "Convertir un texto vendedor genérico en comunicación confiable.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Criticar el texto",
          instruction:
            "Copie este prompt y pegue un texto que ChatGPT le haya generado.",
          prompt:
            "Revise este texto como si usted fuera un cliente normal. Dígame qué partes suenan exageradas, falsas, insistentes o de vendedor barato. Señale frases específicas y explique por qué pueden generar desconfianza: [pegue aquí el texto].",
          example:
            "Frases como 'la mejor solución del mercado' o 'resultado garantizado' pueden sonar falsas si no hay una explicación concreta detrás.",
        },
        {
          label: "Mini práctica B",
          title: "Reescribir con confianza",
          instruction:
            "Ahora pida una versión más sobria.",
          prompt:
            "Ahora reescriba ese texto para que suene más claro, sobrio y confiable. Quite presión, exageraciones y frases vacías. Que parezca escrito por una persona seria que quiere ayudar.",
          example:
            "Podemos revisar su caso y mostrarle una forma más simple de ordenar el proceso, para que tome una decisión con más claridad y menos pérdida de tiempo.",
        },
      ],
      reflection:
        "Vender bien no es gritar más fuerte. Es generar confianza con claridad.",
    },
  },

  {
    time: "95–115 min",
    teacherTitle: "Bloque 5: pieza final para usar esta semana",
    teacherText:
      "Cada alumno crea una pieza real: WhatsApp, publicación o respuesta comercial. El objetivo es salir con algo guardado, no con teoría.",
    teacherGoal:
      "Que cada alumno produzca una pieza final aplicable a su vida, trabajo o negocio.",
    teacherAction:
      "Si alguien no sabe qué hacer, dele tres opciones: mensaje de WhatsApp, post corto o respuesta a un cliente.",
    studentTitle: "Su pieza final",
    studentText:
      "Ahora vamos a crear una pieza lista para usar esta semana.",
    practice: {
      theme: "Producción final",
      objective:
        "Crear un contenido real aplicando todo lo aprendido.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Elegir formato",
          instruction:
            "Elija una opción y copie el prompt.",
          prompt:
            "Quiero crear una pieza final para usar esta semana. El formato será [WhatsApp / publicación de redes / respuesta a cliente]. El tema es [tema]. La persona que lo va a recibir es [tipo de persona]. Quiero lograr [objetivo]. Ayúdeme a escribir una primera versión clara, humana y útil.",
          example:
            "Hola, ¿cómo está? Estoy compartiendo ideas prácticas para usar IA en tareas diarias sin complicarse. Si le interesa, puedo enseñarle un ejemplo sencillo aplicado a su trabajo.",
        },
        {
          label: "Mini práctica B",
          title: "Versión final lista",
          instruction:
            "Ahora convierta la primera versión en algo publicable o enviable.",
          prompt:
            "Ahora déjeme la versión final lista para usar. Que sea corta, clara y natural. Revise que no suene genérica, exagerada ni robótica. Al final agregue una llamada a la acción suave.",
          example:
            "Si quiere, le puedo compartir un ejemplo práctico para que vea cómo aplicarlo sin complicarse.",
        },
      ],
      reflection:
        "La clase sirve cuando el alumno sale con algo que puede usar. La IA no es decoración: es productividad aplicada.",
    },
  },

  {
    time: "115–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Cierre fuerte: hoy no aprendieron a escribir más bonito. Aprendieron a dirigir mensajes para generar confianza, atención y acción.",
    teacherGoal:
      "Cerrar con logro concreto y preparar el terreno para la clase final.",
    teacherAction:
      "Pida que guarden su mejor pieza y que la usen o la prueben antes de la próxima clase.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su mejor pieza. La próxima clase vamos a llevar esto a productividad, organización y uso real de IA en el día a día.",
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

export default function Clase3Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Clase 3</h1>
        <h2 style={subtitle}>IA aplicada a contenido y ventas reales</h2>

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
