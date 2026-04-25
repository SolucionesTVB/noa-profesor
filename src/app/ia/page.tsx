"use client";

import { useEffect, useState } from "react";

const classes = [
  { id: "1", title: "Campaña para cafetería", icon: "☕" },
  { id: "2", title: "Lanzamiento de producto", icon: "👟" },
  { id: "3", title: "Marca personal", icon: "✨" },
  { id: "4", title: "App o servicio digital", icon: "📱" },
  { id: "5", title: "Turismo local", icon: "🌴" },
];

const TOTAL_STEPS = 5;
const WHATSAPP_NUMBER = "50660457989";

export default function IAHomePage() {
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [accessMap, setAccessMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    loadProgress();
    loadAccess();
  }, []);

  async function loadProgress() {
    const res = await fetch("/api/ia/results");
    const json = await res.json();

    if (!json.ok) return;

    const map: Record<string, Set<string>> = {};

    json.progress.forEach((row: any) => {
      if (!map[row.class_id]) map[row.class_id] = new Set();
      if (row.completed) map[row.class_id].add(row.step_id);
    });

    const percentMap: Record<string, number> = {};

    Object.keys(map).forEach((classId) => {
      percentMap[classId] = Math.round(
        (map[classId].size / TOTAL_STEPS) * 100
      );
    });

    setProgressMap(percentMap);
  }

  async function loadAccess() {
    const res = await fetch("/api/ia/access");
    const json = await res.json();

    if (!json.ok) return;

    const map: Record<string, boolean> = {};

    json.access.forEach((row: any) => {
      map[row.class_id] = row.unlocked;
    });

    setAccessMap(map);
  }

  function buildWhatsAppLink(classTitle: string) {
    const msg = encodeURIComponent(
      `Hola, quiero desbloquear la clase: ${classTitle}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  }

  return (
    <main style={main}>
      <div style={container}>
        <h1 style={title}>IA Aplicada</h1>
        <p style={subtitle}>
          Sistema guiado para enseñar IA con ejecución real.
        </p>

        <section style={grid}>
          {classes.map((cls) => {
            const classKey = `ia-${cls.id}`;
            const progress = progressMap[classKey] || 0;
            const unlocked = accessMap[classKey] || false;

            return (
              <div key={cls.id} style={card}>
                <div style={{ fontSize: 42 }}>{cls.icon}</div>

                <h2>{cls.title}</h2>

                <div style={bar}>
                  <div style={{ ...fill, width: `${progress}%` }} />
                </div>

                <p style={small}>{progress}% completado</p>

                {unlocked ? (
                  <a href={`/ia/${cls.id}`} style={btn}>
                    Entrar →
                  </a>
                ) : (
                  <a
                    href={buildWhatsAppLink(cls.title)}
                    target="_blank"
                    rel="noreferrer"
                    style={buyBtn}
                  >
                    🔓 Desbloquear clase
                  </a>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  padding: "40px 20px",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const title = {
  fontSize: "42px",
};

const subtitle = {
  color: "#94a3b8",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card = {
  border: "1px solid rgba(148,163,184,.2)",
  borderRadius: "20px",
  padding: "20px",
  background: "#0f172a",
};

const btn = {
  display: "inline-block",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "12px",
  background: "linear-gradient(135deg,#0284c7,#0f766e)",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const buyBtn = {
  display: "inline-block",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "12px",
  background: "linear-gradient(135deg,#16a34a,#22c55e)",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const small = {
  fontSize: "12px",
  color: "#94a3b8",
};

const bar = {
  width: "100%",
  height: "8px",
  background: "rgba(148,163,184,.2)",
  borderRadius: "999px",
  marginTop: "10px",
};

const fill = {
  height: "100%",
  background: "linear-gradient(90deg,#38bdf8,#22c55e)",
};
