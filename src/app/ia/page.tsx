"use client";

import Link from "next/link";

const classes = [
  {
    id: "ia-1",
    title: "Campaña para cafetería",
    icon: "☕",
    description: "Crear imagen, música y video con IA.",
    status: "available",
  },
  {
    id: "ia-2",
    title: "Lanzamiento de producto",
    icon: "👟",
    description: "Estrategia de lanzamiento con IA.",
    status: "available",
  },
  {
    id: "ia-3",
    title: "Marca personal",
    icon: "✨",
    description: "Contenido estratégico con IA.",
    status: "available",
  },
  {
    id: "ia-4",
    title: "App o servicio digital",
    icon: "📱",
    description: "Pendiente",
    status: "coming",
  },
];

export default function Page() {
  return (
    <main style={main}>
      <div style={container}>
        <h1 style={title}>NOA Profesor · IA</h1>

        <div style={grid}>
          {classes.map((c) => (
            <div key={c.id} style={card}>
              <div style={icon}>{c.icon}</div>
              <h2>{c.title}</h2>
              <p>{c.description}</p>

              {c.status === "available" ? (
                <Link href={`/ia/${c.id}`} style={btn}>
                  Entrar a clase →
                </Link>
              ) : (
                <div style={coming}>Próximamente</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  padding: 40,
};

const container = {
  maxWidth: 1100,
  margin: "0 auto",
};

const title = {
  fontSize: 40,
  marginBottom: 30,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: 20,
};

const card = {
  border: "1px solid #1e293b",
  borderRadius: 20,
  padding: 20,
};

const icon = {
  fontSize: 40,
};

const btn = {
  display: "block",
  marginTop: 15,
  padding: 10,
  textAlign: "center" as const,
  background: "#0284c7",
  borderRadius: 10,
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const coming = {
  marginTop: 15,
  padding: 10,
  textAlign: "center" as const,
  background: "#1e293b",
  borderRadius: 10,
};
