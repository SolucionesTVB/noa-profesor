"use client";

import { useState } from "react";
import PracticeCard from "@/components/clase2/PracticeCard";
import AiCoach from "@/components/clase2/AiCoach";

const blocks = [
  {
    time: "0–15 min",
    teacherTitle: "Arranque: de pedir a comunicar",
    teacherText:
      "La clase pasada aprendimos a pedirle bien a la IA. Hoy subimos nivel: vamos a usar IA para comunicar mejor, con intención, claridad y criterio humano.",
    teacherGoal:
      "Que el grupo entienda que esta clase no repite prompts. Hoy trabajamos comunicación inteligente.",
    teacherAction:
      "Pregunte: ¿qué mensaje usted borra de inmediato? ¿Qué mensaje sí le dan ganas de leer?",
    studentTitle: "Comunicación inteligente con IA",
    studentText:
      "Hoy vamos a construir mensajes que una persona real entienda, recuerde y quiera leer.",
    practice: null,
  },

  {
    time: "15–35 min",
    teacherTitle: "Bloque 1: marca personal moderna",
    teacherText:
      "Primero creamos una publicación profesional. Luego la mejoramos emocionalmente. Aquí el alumno ve que no basta con que el texto esté correcto: debe conectar.",
    teacherGoal:
      "Dos victorias rápidas: crear y mejorar.",
    teacherAction:
      "Pida comparar la primera versión contra la segunda. Pregunta clave: ¿cuál suena más humana?",
    studentTitle: "Marca personal moderna",
    studentText:
      "Vamos a crear contenido profesional para una persona que ofrece conocimiento.",
    practice: {
      theme: "Marca personal moderna",
      objective:
        "Crear y mejorar una publicación profesional para que suene humana, clara y confiable.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Primera versión profesional",
          instruction:
            "Copie este prompt en ChatGPT. No cambie nada todavía.",
          prompt:
            "Ayúdame a escribir un mensaje corto para LinkedIn. Quiero hablar como contador y explicar, de forma sencilla, cómo puedo ayudar a una persona a ordenar mejor sus finanzas y sentirse más tranquila con su dinero. Que suene profesional, pero cercano, como si se lo explicara a alguien conocido.",
          example:
            "Muchas veces el estrés financiero no viene por falta de dinero, sino por falta de orden. Mi objetivo es ayudar a personas y familias a entender mejor sus finanzas, tomar decisiones con más tranquilidad y recuperar control sobre su economía de forma clara y sencilla.",
        },
        {
          label: "Mini práctica B",
          title: "Versión con más conexión",
          instruction:
            "Ahora mejore la respuesta anterior. Esta es la parte importante.",
          prompt:
            "Ahora mejore ese mensaje. Quiero que suene más cercano y humano, como si le estuviera hablando a una persona que está preocupada por su dinero, sus deudas o porque siente que no tiene orden financiero. Mantenga el mensaje claro y profesional.",
          example:
            "Detrás de muchas preocupaciones económicas hay personas que solo necesitan un poco de claridad y orden. Mi trabajo no es hablar complicado, sino ayudarle a sentir más tranquilidad, entender mejor sus números y recuperar confianza en sus decisiones financieras.",
        },
      ],
      reflection:
        "La segunda versión no solo escribe más bonito. Comunica mejor porque entiende mejor a la persona que lo va a leer. Ya no se trata solo de decir algo correcto, sino de lograr que el mensaje se sienta cercano, útil y confiable. Ahí es donde la IA empieza a trabajar con intención.",
    },
  },

  {
    time: "35–55 min",
    teacherTitle: "Bloque 2: cambio de contexto",
    teacherText:
      "Ahora cambiamos de industria. Si entendieron la lógica, deben poder aplicarla a otro caso.",
    teacherGoal:
      "Misma habilidad, otro contexto.",
    teacherAction:
      "Pida que piensen en la emoción central: una familia buscando casa necesita confianza, tranquilidad y claridad.",
    studentTitle: "Bienes raíces con confianza",
    studentText:
      "Vamos a crear contenido para una empresa que acompaña familias a encontrar hogar.",
    practice: {
      theme: "Bienes raíces con confianza",
      objective:
        "Crear un mensaje que transmita tranquilidad, cercanía y confianza.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Primera versión confiable",
          instruction:
            "Copie este prompt en ChatGPT.",
          prompt:
            "Ayúdame a escribir un mensaje para una empresa de bienes raíces. Quiero explicar que acompañamos a familias a encontrar una casa donde puedan sentirse tranquilas y seguras. Que el mensaje suene cercano, confiable y fácil de entender.",
          example:
            "Encontrar hogar no debería sentirse complicado. Nuestro objetivo es acompañar a cada familia de forma clara, cercana y transparente para que puedan tomar una decisión con tranquilidad y confianza.",
        },
        {
          label: "Mini práctica B",
          title: "Versión premium",
          instruction:
            "Ahora mejore el mismo mensaje. No queremos frases exageradas.",
          prompt:
            "Ahora mejore ese mensaje para que suene más elegante y profesional, pero sin sonar exagerado ni falso. No use frases de anuncio barato. Quiero que se sienta humano, claro y confiable.",
          example:
            "Elegir un hogar es una de las decisiones más importantes de la vida. Por eso creemos en acompañar cada paso con claridad, escucha y confianza, para que cada familia pueda decidir con seguridad.",
        },
      ],
      reflection:
        "Premium no significa hablar raro. Premium es sonar claro, sobrio y confiable.",
    },
  },

  {
    time: "55–75 min",
    teacherTitle: "Bloque 3: convertir conocimiento en contenido",
    teacherText:
      "Ahora usamos una profesión más seria. El reto es explicar algo importante sin sonar complicado.",
    teacherGoal:
      "Traducir conocimiento experto a lenguaje simple.",
    teacherAction:
      "Frase clave: una persona inteligente no complica; aclara.",
    studentTitle: "Conocimiento experto en lenguaje simple",
    studentText:
      "Vamos a convertir conocimiento profesional en contenido útil y fácil de entender.",
    practice: {
      theme: "Consejo profesional simple",
      objective:
        "Convertir un tema serio en una publicación clara, útil y cercana.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Abogado explicando algo útil",
          instruction:
            "Copie este prompt. Queremos un mensaje preventivo, no alarmista.",
          prompt:
            "Ayúdame a escribir un mensaje corto como abogado. Quiero explicar, con palabras sencillas, por qué una persona debería revisar un contrato antes de firmarlo. Escríbalo como si se lo explicara a alguien que no sabe de leyes.",
          example:
            "Antes de firmar un contrato, tómese unos minutos para entender bien lo que acepta. Una revisión sencilla puede evitar malentendidos, gastos o problemas que después son más difíciles de resolver.",
        },
        {
          label: "Mini práctica B",
          title: "Menos técnico, más claro",
          instruction:
            "Ahora quite tecnicismos. Cualquier persona debe entenderlo.",
          prompt:
            "Ahora haga ese mensaje más fácil de entender. Quite palabras legales complicadas, frases largas o cosas que puedan confundir. Quiero que cualquier persona lo pueda leer y entender rápido.",
          example:
            "Firmar sin entender puede traer problemas. Antes de aceptar cualquier documento, revise con calma qué dice, qué compromisos asume y qué podría pasar si algo cambia.",
        },
      ],
      reflection:
        "Comunicar bien no es hablar difícil. Comunicar bien es lograr que otra persona entienda.",
    },
  },

  {
    time: "75–95 min",
    teacherTitle: "Bloque 4: criterio anti-IA genérica",
    teacherText:
      "Aquí enseñamos a detectar contenido que suena a máquina: frases infladas, promesas falsas, exceso de adjetivos y falta de humanidad.",
    teacherGoal:
      "Desarrollar criterio, no dependencia.",
    teacherAction:
      "Pida buscar frases sospechosas: 'la mejor solución', 'sueños hechos realidad', 'calidad incomparable'.",
    studentTitle: "Detectar y corregir contenido genérico",
    studentText:
      "Vamos a limpiar un texto para que deje de sonar robótico.",
    practice: {
      theme: "Anti-IA genérica",
      objective:
        "Detectar texto artificial y convertirlo en comunicación más humana.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Detectar frases débiles",
          instruction:
            "Copie este prompt para que ChatGPT critique el texto.",
          prompt:
            "Revise este mensaje como si usted fuera una persona normal que lo recibe por WhatsApp o redes. Dígame qué partes suenan falsas, exageradas o muy robóticas, y qué cambiaría para que se sienta más claro, más humano y más confiable: [pegue aquí su mensaje].",
          example:
            "El texto suena genérico cuando usa frases como 'la mejor opción', 'calidad garantizada' o 'servicio excepcional' sin explicar nada concreto.",
        },
        {
          label: "Mini práctica B",
          title: "Reescribir con criterio",
          instruction:
            "Ahora pida una versión mejorada con restricciones claras.",
          prompt:
            "Ahora reescriba ese mensaje para que suene más natural, más claro y más confiable. Quite frases exageradas, palabras vacías o cosas que suenen falsas. Que parezca escrito por una persona real.",
          example:
            "Acompañamos cada proceso con claridad, atención cercana y orientación práctica, para que la persona pueda tomar decisiones con más seguridad.",
        },
      ],
      reflection:
        "La IA puede sonar brillante pero vacía. El criterio humano limpia el ruido.",
    },
  },

  {
    time: "95–115 min",
    teacherTitle: "Bloque 5: aplicación propia",
    teacherText:
      "Cada alumno elige un caso real: profesión, hobby, negocio, experiencia o consejo útil.",
    teacherGoal:
      "Pasar de ejercicios guiados a aplicación personal.",
    teacherAction:
      "Si alguien no sabe qué elegir, dele opciones: trabajo, familia, servicio, consejo, experiencia o algo que quiera explicar mejor.",
    studentTitle: "Su propio caso",
    studentText:
      "Ahora use IA para crear contenido sobre un tema suyo.",
    practice: {
      theme: "Aplicación personal",
      objective:
        "Crear una publicación propia usando la misma lógica aprendida.",
      practices: [
        {
          label: "Mini práctica A",
          title: "Crear contenido propio",
          instruction:
            "Complete los espacios y copie el prompt en ChatGPT.",
          prompt:
            "Ayúdame a escribir una publicación sobre [tema, profesión o experiencia]. Quiero ayudar a [tipo de persona]. Escríbalo de forma clara, cercana y útil, como si yo se lo estuviera explicando a alguien que quiero orientar.",
          example:
            "Una buena organización no empieza con grandes cambios. Empieza con una decisión pequeña: ordenar lo importante para vivir con menos estrés y más claridad.",
        },
        {
          label: "Mini práctica B",
          title: "Versión final lista",
          instruction:
            "Ahora conviértalo en una versión final usable.",
          prompt:
            "Ahora déjeme una versión final lista para publicar en LinkedIn, Facebook o WhatsApp. Que sea corta, clara, humana y fácil de leer. Al final agregue una frase sencilla para invitar a la persona a comentar o responder.",
          example:
            "Organizar mejor una idea, un servicio o una decisión puede cambiar completamente la forma en que otros nos entienden. Si tiene algo valioso que comunicar, la claridad es el primer paso.",
        },
      ],
      reflection:
        "Cuando el alumno lo aplica a su vida real, deja de ser clase y se vuelve herramienta.",
    },
  },

  {
    time: "115–120 min",
    teacherTitle: "Cierre NOA",
    teacherText:
      "Cierre fuerte: la IA no hizo el trabajo por ellos. Ellos aprendieron a dirigirla con inteligencia.",
    teacherGoal:
      "Cerrar con logro y continuidad.",
    teacherAction:
      "Pida que guarden su mejor resultado. No cerrar con teoría; cerrar con producto usable.",
    studentTitle: "Cierre",
    studentText:
      "Guarde su mejor mensaje. Ese contenido ya puede usarse o seguir mejorándose.",
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

export default function Clase2Page() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  const support = getTeacherSupport(active);

  return (
    <main style={page}>
      <section style={teacher}>
        <div style={kicker}>NOA Profesor · Guía</div>
        <h1 style={title}>Clase 2</h1>
        <h2 style={subtitle}>Comunicación inteligente con IA</h2>

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
