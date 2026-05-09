import Sidebar from "@/components/dashboard/Sidebar";
import Metrics from "@/components/dashboard/Metrics";
import LessonCard from "@/components/dashboard/LessonCard";

export default function DashboardPage() {
  const lessons = [
    {
      id: "ia-1",
      status: "Lista para clase",
      title: "Pedir bien para obtener algo útil",
      result: "Mensaje final listo para WhatsApp",
    },
    {
      id: "ia-2",
      status: "En preparación",
      title: "Crear contenido que conecta",
      result: "Imagen + texto listo para publicar",
    },
    {
      id: "ia-3",
      status: "Pendiente",
      title: "Ahorrar tiempo con IA",
      result: "Sistema personal básico de productividad",
    },
    {
      id: "ia-4",
      status: "Pendiente",
      title: "IA aplicada a ventas",
      result: "Flujo básico de venta con IA",
    },
  ];

  return (
    <main style={page}>
      <Sidebar />

      <section style={content}>
        <header style={hero}>
          <div>
            <div style={eyebrow}>
              NOA Profesor · Plataforma educativa
            </div>

            <h1 style={title}>IA para Adultos</h1>

            <p style={subtitle}>
              Programa práctico para adultos de 50 a 78 años.
              Aprendizaje humano, guiado y ejecutable desde el celular.
            </p>
          </div>

          <div style={livePill}>
            <span style={pulse}></span>
            Sistema activo
          </div>
        </header>

        <Metrics />

        <section style={panel}>
          <div style={panelHeader}>
            <div>
              <div style={panelKicker}>Plan de clases</div>
              <h2 style={panelTitle}>Ruta de aprendizaje</h2>
            </div>

            <div style={panelNote}>
              Modo SaaS activo
            </div>
          </div>

          <div style={lessonList}>
            {lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                id={lesson.id}
                index={index}
                title={lesson.title}
                status={lesson.status}
                result={lesson.result}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 80% 0%, rgba(34,211,238,.18), transparent 30%), linear-gradient(135deg,#020617,#07111f,#020617)",
  display: "flex",
  fontFamily: "Inter, Arial, sans-serif",
};

const content = {
  flex: 1,
  padding: 42,
};

const hero = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 30,
  marginBottom: 28,
};

const eyebrow = {
  color: "#22d3ee",
  fontSize: 13,
  letterSpacing: 5,
  textTransform: "uppercase" as const,
  fontWeight: 950,
};

const title = {
  fontSize: 66,
  margin: "16px 0 0",
  lineHeight: 1,
  color: "white",
};

const subtitle = {
  color: "#cbd5e1",
  fontSize: 19,
  lineHeight: 1.65,
  maxWidth: 920,
  marginTop: 22,
};

const livePill = {
  border: "1px solid rgba(34,211,238,.28)",
  background: "rgba(34,211,238,.1)",
  borderRadius: 999,
  padding: "14px 20px",
  color: "#a5f3fc",
  fontWeight: 950,
  whiteSpace: "nowrap" as const,
};

const pulse = {
  display: "inline-block",
  width: 10,
  height: 10,
  borderRadius: 999,
  background: "#22c55e",
  marginRight: 10,
  boxShadow: "0 0 18px #22c55e",
};

const panel = {
  background: "rgba(15,23,42,.58)",
  border: "1px solid rgba(148,163,184,.16)",
  borderRadius: 32,
  padding: 28,
};

const panelHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 22,
};

const panelKicker = {
  color: "#22d3ee",
  fontSize: 12,
  letterSpacing: 4,
  textTransform: "uppercase" as const,
  fontWeight: 950,
};

const panelTitle = {
  fontSize: 34,
  margin: "8px 0 0",
  color: "white",
};

const panelNote = {
  color: "#a7f3d0",
  border: "1px solid rgba(34,197,94,.24)",
  background: "rgba(34,197,94,.08)",
  padding: "10px 14px",
  borderRadius: 999,
  fontWeight: 900,
};

const lessonList = {
  display: "grid",
  gap: 18,
};
