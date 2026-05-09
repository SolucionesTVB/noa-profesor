export default function Sidebar() {
  return (
    <aside style={sidebar}>
      <div style={logo}>NOA</div>

      <h1 style={brand}>Profesor</h1>

      <p style={text}>
        Centro operativo para clases prácticas con inteligencia artificial.
      </p>

      <div style={section}>Curso activo</div>

      <div style={activeCourse}>
        <strong>IA para Adultos</strong>
        <span>4 clases · 2 horas cada una</span>
      </div>

      <div style={section}>Accesos</div>

      <div style={navActive}>Dashboard</div>
      <div style={navItem}>Cursos</div>
      <div style={navItem}>Sesiones</div>
      <div style={navItem}>Materiales</div>

      <div style={footer}>
        No somos un software.
        <br />
        Somos productividad inteligente.
      </div>
    </aside>
  );
}

const sidebar = {
  width: 330,
  padding: 32,
  background: "rgba(2,6,23,.82)",
  borderRight: "1px solid rgba(148,163,184,.16)",
  display: "flex",
  flexDirection: "column" as const,
};

const logo = {
  color: "#22d3ee",
  letterSpacing: 7,
  fontSize: 13,
  fontWeight: 950,
};

const brand = {
  fontSize: 44,
  margin: "14px 0 0",
  lineHeight: 1,
  color: "white",
};

const text = {
  color: "#94a3b8",
  lineHeight: 1.65,
  marginTop: 22,
  fontSize: 16,
};

const section = {
  marginTop: 36,
  marginBottom: 12,
  color: "#64748b",
  letterSpacing: 4,
  fontSize: 12,
  textTransform: "uppercase" as const,
  fontWeight: 900,
};

const activeCourse = {
  background:
    "linear-gradient(135deg, rgba(34,211,238,.16), rgba(59,130,246,.08))",
  border: "1px solid rgba(34,211,238,.25)",
  borderRadius: 24,
  padding: 22,
  display: "grid",
  gap: 8,
  color: "#e0f2fe",
};

const navActive = {
  background: "rgba(34,211,238,.14)",
  border: "1px solid rgba(34,211,238,.22)",
  borderRadius: 16,
  padding: "14px 16px",
  marginBottom: 10,
  fontWeight: 900,
  color: "white",
};

const navItem = {
  background: "rgba(15,23,42,.55)",
  border: "1px solid rgba(148,163,184,.12)",
  borderRadius: 16,
  padding: "14px 16px",
  marginBottom: 10,
  color: "#94a3b8",
};

const footer = {
  marginTop: "auto",
  borderTop: "1px solid rgba(148,163,184,.16)",
  paddingTop: 24,
  color: "#67e8f9",
  fontWeight: 900,
  lineHeight: 1.5,
};
