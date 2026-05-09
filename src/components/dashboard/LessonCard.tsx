type Props = {
  id: string;
  index: number;
  title: string;
  status: string;
  result: string;
};

export default function LessonCard({
  id,
  index,
  title,
  status,
  result,
}: Props) {
  return (
    <article style={card}>
      <div style={{ flex: 1 }}>
        <div style={top}>
          <span style={number}>Clase {index + 1}</span>

          <span
            style={
              status === "Lista para clase"
                ? ready
                : status === "En preparación"
                ? warning
                : muted
            }
          >
            {status}
          </span>
        </div>

        <h3 style={titleStyle}>{title}</h3>

        <p style={resultStyle}>Resultado: {result}</p>
      </div>

      <div style={actions}>
        <a href={`/ia/${id}`} style={primaryBtn}>
          Abrir profesor
        </a>

        <a href={`/ia/${id}/presentacion`} style={secondaryBtn}>
          Ver alumno
        </a>
      </div>
    </article>
  );
}

const card = {
  background: "rgba(2,6,23,.48)",
  border: "1px solid rgba(148,163,184,.14)",
  borderRadius: 26,
  padding: 26,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 24,
};

const top = {
  display: "flex",
  gap: 12,
  alignItems: "center",
  marginBottom: 14,
};

const number = {
  color: "#67e8f9",
  letterSpacing: 4,
  fontSize: 12,
  textTransform: "uppercase" as const,
  fontWeight: 950,
};

const ready = {
  color: "#86efac",
  background: "rgba(34,197,94,.1)",
  border: "1px solid rgba(34,197,94,.25)",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 950,
};

const warning = {
  color: "#fde68a",
  background: "rgba(251,191,36,.1)",
  border: "1px solid rgba(251,191,36,.25)",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 950,
};

const muted = {
  color: "#cbd5e1",
  background: "rgba(148,163,184,.08)",
  border: "1px solid rgba(148,163,184,.18)",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 950,
};

const titleStyle = {
  fontSize: 30,
  margin: 0,
  lineHeight: 1.18,
  color: "white",
};

const resultStyle = {
  color: "#94a3b8",
  fontSize: 17,
  marginTop: 10,
};

const actions = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap" as const,
};

const primaryBtn = {
  background: "#22d3ee",
  color: "#020617",
  textDecoration: "none",
  fontWeight: 950,
  padding: "15px 22px",
  borderRadius: 16,
};

const secondaryBtn = {
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
  padding: "15px 22px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,.18)",
};
