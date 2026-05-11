type MiniPractice = {
  label?: string;
  title: string;
  instruction?: string;
  prompt: string;
  example: string;
};

type Props = {
  theme?: string;
  objective?: string;
  reflection?: string;
  practices?: MiniPractice[];

  number?: string;
  title?: string;
  description?: string;
  prompt?: string;
  example?: string;
};

export default function PracticeCard(props: Props) {
  const practices =
    props.practices ??
    [
      {
        label: props.number ? `Mini práctica ${props.number}` : "Mini práctica",
        title: props.title || "Práctica",
        instruction: props.description || "Copie el prompt en ChatGPT.",
        prompt: props.prompt || "",
        example: props.example || "",
      },
    ];

  const reviewPoints = getReviewPoints(props.theme || props.title || "");

  return (
    <section style={card}>
      <div style={header}>
        <div>
          <div style={badge}>Laboratorio práctico NOA</div>
          <h2 style={titleStyle}>{props.theme || props.title}</h2>
        </div>

        <div style={pill}>2 mini prácticas + giro NOA</div>
      </div>

      {props.objective && <p style={objectiveText}>{props.objective}</p>}

      <div style={grid}>
        {practices.map((practice, i) => (
          <article key={`${practice.title}-${i}`} style={miniCard}>
            <div style={miniLabel}>{practice.label || `Mini práctica ${i + 1}`}</div>

            <h3 style={miniTitle}>{practice.title}</h3>

            {practice.instruction && (
              <p style={instruction}>{practice.instruction}</p>
            )}

            <div style={promptBox}>
              <div style={boxLabel}>Copie este prompt en ChatGPT</div>
              <p style={promptText}>{practice.prompt}</p>
            </div>

            <div style={exampleBox}>
              <div style={exampleLabel}>Posible respuesta</div>
              <p style={exampleText}>{practice.example}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={noaBox}>
        <div style={noaLabel}>Giro NOA · Ahora ponga la IA a pensar mejor</div>

        <h3 style={noaTitle}>No acepte la primera respuesta</h3>

        <p style={noaText}>
          Después de hacer las dos prácticas, copie este prompt en ChatGPT.
          Aquí es donde la IA deja de ser “escribidor” y se vuelve asistente crítico.
        </p>

        <div style={noaPrompt}>
          <strong>Prompt NOA:</strong>
          <p>
            Revise el mensaje anterior como si usted fuera una persona real que lo recibe.
            Dígame qué parte suena genérica, qué parte no emociona, qué parte sobra y cómo
            mejorarlo para que sea más claro, más humano y más útil.
          </p>
        </div>

        <div style={noaResult}>
          <strong>Qué debe pasar:</strong>
          <p>
            El alumno descubre que puede pedirle a la IA que critique, corrija y mejore.
            Ahí cambia el juego.
          </p>
        </div>
      </div>

      <div style={reviewBox}>
        <strong>Para revisar juntos</strong>
        {reviewPoints.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>

      <div style={equalityBox}>
        <strong>Modo igualdad digital</strong>
        <p>
          Aquí no gana quien sabe más de computadoras. Gana quien aprende a explicar mejor lo que quiere.
          La IA no premia la edad, premia la claridad.
        </p>
        <p>
          Si se pierde, use esta frase: “Explíquemelo más sencillo, paso a paso, como si fuera la primera vez que lo hago”.
        </p>
      </div>

      {props.reflection && (
        <div style={reflectionBox}>
          <strong>Lo importante aquí</strong>
          <p>{props.reflection}</p>
        </div>
      )}
    </section>
  );
}

const card = {
  background:
    "radial-gradient(circle at 80% 0%, rgba(34,211,238,.18), transparent 32%), linear-gradient(135deg, rgba(15,23,42,.98), rgba(8,47,73,.72))",
  border: "1px solid rgba(34,211,238,.32)",
  borderRadius: 34,
  padding: 32,
  boxShadow: "0 30px 90px rgba(0,0,0,.35)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  gap: 18,
  alignItems: "flex-start",
  marginBottom: 14,
};

const badge = {
  color: "#67e8f9",
  fontWeight: 950,
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  fontSize: 12,
  marginBottom: 10,
};

const pill = {
  color: "#a7f3d0",
  background: "rgba(34,197,94,.1)",
  border: "1px solid rgba(34,197,94,.25)",
  borderRadius: 999,
  padding: "10px 14px",
  fontWeight: 950,
  fontSize: 12,
  whiteSpace: "nowrap" as const,
};

const titleStyle = {
  fontSize: 40,
  margin: 0,
  lineHeight: 1.05,
};

const objectiveText = {
  color: "#cbd5e1",
  fontSize: 20,
  lineHeight: 1.6,
  marginBottom: 24,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
};

const miniCard = {
  background: "rgba(2,6,23,.72)",
  border: "1px solid rgba(148,163,184,.18)",
  borderRadius: 26,
  padding: 22,
};

const miniLabel = {
  color: "#22d3ee",
  fontWeight: 950,
  letterSpacing: 3,
  textTransform: "uppercase" as const,
  fontSize: 12,
};

const miniTitle = {
  fontSize: 26,
  margin: "10px 0",
  lineHeight: 1.15,
};

const instruction = {
  color: "#cbd5e1",
  fontSize: 17,
  lineHeight: 1.55,
};

const promptBox = {
  marginTop: 18,
  background: "#020617",
  border: "1px solid rgba(34,211,238,.35)",
  borderRadius: 20,
  padding: 18,
};

const boxLabel = {
  color: "#67e8f9",
  fontWeight: 950,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: "uppercase" as const,
  marginBottom: 10,
};

const promptText = {
  color: "white",
  fontSize: 18,
  lineHeight: 1.6,
  fontWeight: 650,
};

const exampleBox = {
  marginTop: 16,
  background: "rgba(34,197,94,.1)",
  border: "1px solid rgba(34,197,94,.25)",
  borderRadius: 20,
  padding: 18,
};

const exampleLabel = {
  color: "#86efac",
  fontWeight: 950,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: "uppercase" as const,
  marginBottom: 10,
};

const exampleText = {
  color: "#dcfce7",
  fontSize: 17,
  lineHeight: 1.6,
};

const noaBox = {
  marginTop: 24,
  background:
    "linear-gradient(135deg, rgba(124,58,237,.22), rgba(14,165,233,.12))",
  border: "1px solid rgba(196,181,253,.32)",
  borderRadius: 28,
  padding: 26,
};

const noaLabel = {
  color: "#c4b5fd",
  fontWeight: 950,
  letterSpacing: 3,
  textTransform: "uppercase" as const,
  fontSize: 12,
};

const noaTitle = {
  fontSize: 30,
  margin: "10px 0",
  color: "white",
};

const noaText = {
  color: "#ddd6fe",
  fontSize: 18,
  lineHeight: 1.6,
};

const noaPrompt = {
  marginTop: 18,
  background: "rgba(2,6,23,.7)",
  border: "1px solid rgba(196,181,253,.25)",
  borderRadius: 20,
  padding: 20,
  color: "#f5f3ff",
  fontSize: 19,
  lineHeight: 1.65,
};

const noaResult = {
  marginTop: 16,
  background: "rgba(34,197,94,.08)",
  border: "1px solid rgba(34,197,94,.22)",
  borderRadius: 20,
  padding: 18,
  color: "#bbf7d0",
  fontSize: 18,
  lineHeight: 1.6,
};

function getReviewPoints(theme: string) {
  if (theme.includes("Marca personal")) {
    return [
      "¿El mensaje suena como una persona real?",
      "¿Se entiende rápido qué quiere comunicar?",
      "¿La segunda versión se siente más cercana?",
      "¿Qué palabra o frase hizo que mejorara?",
    ];
  }

  if (theme.includes("Bienes raíces")) {
    return [
      "¿El mensaje transmite confianza?",
      "¿Evita frases exageradas o muy publicitarias?",
      "¿Una familia lo entendería fácilmente?",
      "¿La versión premium suena mejor o solo más larga?",
    ];
  }

  if (theme.includes("Consejo profesional")) {
    return [
      "¿El mensaje explica algo útil?",
      "¿Quitó palabras difíciles?",
      "¿Una persona sin experiencia lo entendería?",
      "¿El contenido ayuda o solo impresiona?",
    ];
  }

  if (theme.includes("Anti-IA")) {
    return [
      "¿Qué frases suenan robóticas?",
      "¿Qué partes parecen exageradas?",
      "¿Qué se puede decir más simple?",
      "¿La versión final parece escrita por una persona real?",
    ];
  }

  if (theme.includes("Aplicación personal")) {
    return [
      "¿El tema es realmente útil para usted?",
      "¿El mensaje representa lo que quería decir?",
      "¿Se podría publicar o enviar hoy?",
      "¿Qué cambiaría antes de usarlo?",
    ];
  }

  return [
    "¿Qué cambió entre la primera y la segunda versión?",
    "¿Cuál versión comunica mejor?",
    "¿Qué parte se siente más humana?",
    "¿Qué aprendimos de este ejercicio?",
  ];
}

const reviewBox = {
  marginTop: 24,
  background: "rgba(14,165,233,.10)",
  border: "1px solid rgba(14,165,233,.25)",
  borderRadius: 22,
  padding: 20,
  color: "#bae6fd",
  fontSize: 18,
  lineHeight: 1.6,
};

const equalityBox = {
  marginTop: 22,
  background: "rgba(168,85,247,.10)",
  border: "1px solid rgba(168,85,247,.28)",
  borderRadius: 22,
  padding: 20,
  color: "#e9d5ff",
  fontSize: 18,
  lineHeight: 1.6,
};

const reflectionBox = {
  marginTop: 22,
  background: "rgba(251,191,36,.08)",
  border: "1px solid rgba(251,191,36,.22)",
  borderRadius: 22,
  padding: 20,
  color: "#fde68a",
  fontSize: 18,
  lineHeight: 1.6,
};
