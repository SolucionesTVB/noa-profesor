export default function NoaProfePage() {
  const classes = [
    {
      name: "Clase 1",
      title: "Pedir bien para obtener algo útil",
      status: "Disponible",
      href: "/ia/ia-1",
    },
    {
      name: "Clase 2",
      title: "Comunicación inteligente con IA",
      status: "Lista",
      href: "/noa-profe/clase-2",
    },
    {
      name: "Clase 3",
      title: "Ahorrar tiempo con IA",
      status: "Próximamente",
      href: "#",
    },
    {
      name: "Clase 4",
      title: "IA aplicada a ventas",
      status: "Próximamente",
      href: "#",
    },
  ];

  return (
    <main style={page}>
      <aside style={sidebar}>
        <div style={logo}>NOA</div>

        <h1 style={brand}>NOA Profe</h1>

        <p style={text}>
          Una herramienta para dar clases prácticas, claras y modernas con inteligencia artificial.
        </p>

        <div style={section}>Menú</div>

        <div style={active}>Clases</div>
        <div style={nav}>Materiales</div>
        <div style={nav}>Herramientas</div>
        <div style={nav}>Sesiones</div>

        <div style={slogan}>
          No somos un software.
          <br />
          Somos productividad inteligente.
        </div>
      </aside>

      <section style={content}>
        <header style={top}>
          <div>
            <div style={kicker}>NOA Profe</div>

            <h2 style={title}>Clases disponibles</h2>

            <p style={subtitle}>
              Seleccione la clase que va a impartir. Todo está preparado para trabajar desde un solo lugar.
            </p>
          </div>

          <div style={pill}>Activo</div>
        </header>

        <section style={grid}>
          {classes.map((item) => (
            <a
              key={item.title}
              href={item.href}
              style={{
                ...card,
                opacity: item.href === "#" ? 0.45 : 1,
                pointerEvents: item.href === "#" ? "none" : "auto",
              }}
            >
              <div style={cardTop}>
                <span style={classLabel}>{item.name}</span>
                <span style={status}>{item.status}</span>
              </div>

              <h3 style={cardTitle}>{item.title}</h3>

              <p style={cardText}>
                Abrir clase
              </p>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 80% 0%, rgba(34,211,238,.16), transparent 32%), #020617",
  color: "white",
  display: "grid",
  gridTemplateColumns: "330px 1fr",
  fontFamily: "Inter, Arial, sans-serif",
};

const sidebar = {
  padding: 32,
  background: "rgba(2,6,23,.92)",
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
  fontSize: 46,
  margin: "16px 0 0",
  lineHeight: 1,
};

const text = {
  color: "#94a3b8",
  lineHeight: 1.6,
  fontSize: 16,
  marginTop: 22,
};

const section = {
  marginTop: 40,
  marginBottom: 12,
  color: "#64748b",
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  fontSize: 12,
  fontWeight: 950,
};

const active = {
  background: "rgba(34,211,238,.14)",
  border: "1px solid rgba(34,211,238,.22)",
  borderRadius: 18,
  padding: 16,
  fontWeight: 950,
  marginBottom: 10,
};

const nav = {
  background: "rgba(15,23,42,.65)",
  border: "1px solid rgba(148,163,184,.12)",
  borderRadius: 18,
  padding: 16,
  color: "#94a3b8",
  marginBottom: 10,
};

const slogan = {
  marginTop: "auto",
  borderTop: "1px solid rgba(148,163,184,.16)",
  paddingTop: 24,
  color: "#67e8f9",
  fontWeight: 900,
  lineHeight: 1.5,
};

const content = {
  padding: 44,
};

const top = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 24,
  marginBottom: 36,
};

const kicker = {
  color: "#22d3ee",
  letterSpacing: 5,
  textTransform: "uppercase" as const,
  fontSize: 13,
  fontWeight: 950,
};

const title = {
  fontSize: 68,
  margin: "14px 0 0",
};

const subtitle = {
  color: "#cbd5e1",
  fontSize: 20,
  lineHeight: 1.6,
  maxWidth: 850,
};

const pill = {
  color: "#a7f3d0",
  border: "1px solid rgba(34,197,94,.25)",
  background: "rgba(34,197,94,.08)",
  borderRadius: 999,
  padding: "12px 18px",
  fontWeight: 950,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 22,
};

const card = {
  background: "rgba(15,23,42,.78)",
  border: "1px solid rgba(34,211,238,.18)",
  borderRadius: 30,
  padding: 28,
  textDecoration: "none",
  color: "white",
  boxShadow: "0 24px 70px rgba(0,0,0,.24)",
};

const cardTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 22,
};

const classLabel = {
  color: "#67e8f9",
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  fontSize: 12,
  fontWeight: 950,
};

const status = {
  color: "#fde68a",
  background: "rgba(251,191,36,.08)",
  border: "1px solid rgba(251,191,36,.22)",
  borderRadius: 999,
  padding: "6px 10px",
  fontWeight: 900,
  fontSize: 12,
};

const cardTitle = {
  fontSize: 34,
  lineHeight: 1.15,
  margin: 0,
};

const cardText = {
  color: "#94a3b8",
  fontSize: 18,
  lineHeight: 1.5,
};
