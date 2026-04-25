"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type Result = { link: string; notes: string };

const CLASSES: any = {
  "ia-1": {
    title: "Campaña para cafetería",
    module: "Publicidad con inteligencia artificial",
    steps: [
      ["brief", "🎯", "Definir el objetivo", "Brief de clase", "", "Defina cliente, producto y objetivo comercial.", "Cliente: cafetería local. Producto: café frío con repostería. Objetivo: atraer clientes en horario de tarde.", "Qué decir", "Hoy no vamos a crear por crear. Pensamos como agencia: cliente, objetivo y mensaje."],
      ["image", "☕", "Crear la imagen", "Ideogram", "https://ideogram.ai", "Genere una imagen publicitaria para la cafetería.", "Fotografía publicitaria realista de café frío con repostería artesanal, mesa de madera, luz natural de tarde, ambiente cálido, estilo premium, sin texto.", "Qué observar", "¿La imagen transmite ambiente, producto y deseo?"],
      ["music", "🎧", "Crear la música", "Suno", "https://suno.ai", "Cree una pista musical corta para acompañar el anuncio.", "Pista instrumental corta, cálida, moderna y relajada para anuncio de cafetería artesanal.", "Corrección", "La música debe acompañar la marca, no rellenar espacio."],
      ["video", "🎬", "Crear el video", "Pika", "https://pika.art", "Anime la imagen para convertirla en video corto.", "Anima esta imagen con movimiento suave de cámara hacia el producto, ambiente cálido, estilo anuncio comercial de 8 segundos.", "Error común", "Movimiento exagerado o sin intención comercial."],
      ["closing", "✅", "Cierre y presentación", "Presentación", "", "Presente el resultado final y explique la intención.", "La pieza busca atraer clientes en horario de tarde mostrando una experiencia cálida, moderna y apetecible.", "Cierre", "El alumno debe justificar sus decisiones."],
    ],
  },
  "ia-2": {
    title: "Lanzamiento de producto físico",
    module: "Go-to-market con IA",
    steps: [
      ["brief", "📦", "Definir producto y promesa", "Brief", "", "Defina producto, público, beneficio y llamada comercial.", "Producto: tenis deportivos urbanos. Público: jóvenes que caminan mucho. Beneficio: comodidad todo el día con estilo.", "Qué decir", "Un lanzamiento necesita promesa clara."],
      ["image", "👟", "Crear imagen de producto", "Ideogram", "https://ideogram.ai", "Genere una imagen publicitaria del producto.", "Fotografía publicitaria premium de tenis deportivos urbanos, iluminación dramática, fondo oscuro elegante, lanzamiento exclusivo, sin texto.", "Qué observar", "El producto debe ser protagonista."],
      ["copy", "✍️", "Crear mensaje de lanzamiento", "ChatGPT", "https://chatgpt.com", "Cree un texto corto de lanzamiento.", "Escribe un copy moderno y premium para lanzar tenis deportivos urbanos. Incluye comodidad, estilo y llamada a la acción.", "Corrección", "No describa características; venda beneficio."],
      ["video", "🎬", "Crear video teaser", "Pika", "https://pika.art", "Anime la imagen del producto.", "Movimiento suave alrededor del producto, luz premium, sensación de lanzamiento exclusivo, teaser comercial de 8 segundos.", "Error común", "No explique todo; genere expectativa."],
      ["closing", "✅", "Presentar campaña", "Presentación", "", "Presente estrategia, imagen, copy y video.", "La campaña presenta el producto como moderno, cómodo y deseable para uso urbano.", "Cierre", "Debe conectar piezas con lógica comercial."],
    ],
  },
  "ia-3": {
    title: "Marca personal",
    module: "Contenido estratégico con IA",
    steps: [
      ["brief", "🧭", "Definir posicionamiento", "Brief", "", "Defina tema, audiencia y autoridad.", "Tema: productividad con IA. Audiencia: profesionales y pymes. Mensaje: ahorrar tiempo y ejecutar mejor.", "Qué decir", "Marca personal no es hablar de uno; es dejar claro por qué prestar atención."],
      ["pillars", "🧱", "Crear pilares de contenido", "ChatGPT", "https://chatgpt.com", "Cree 3 pilares editoriales.", "Crea 3 pilares de contenido para una marca personal sobre productividad con IA para profesionales y pymes.", "Qué observar", "Los pilares deben ser repetibles."],
      ["post", "📝", "Crear publicación principal", "ChatGPT", "https://chatgpt.com", "Cree una publicación con punto de vista.", "Escribe una publicación para LinkedIn sobre por qué la IA no reemplaza criterio profesional, sino que amplifica ejecución.", "Corrección", "Debe sonar humano y con postura."],
      ["image", "✨", "Crear imagen conceptual", "Ideogram", "https://ideogram.ai", "Genere una imagen conceptual.", "Imagen conceptual premium de profesional usando IA para organizar ideas y mejorar productividad, ambiente moderno, sobrio, sin texto.", "Error común", "Evite cliché futurista saturado."],
      ["closing", "✅", "Presentar propuesta", "Presentación", "", "Presente su propuesta de marca personal.", "Mi marca personal ayuda a profesionales y pymes a usar IA con criterio práctico.", "Cierre", "Debe conectar audiencia, pilares, texto e imagen."],
    ],
  },
};

export default function Page() {
  const params = useParams();
  const classId = `ia-${params.id}`;
  const data = CLASSES[classId] || CLASSES["ia-1"];

  const [studentId, setStudentId] = useState("demo-alumno");
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [results, setResults] = useState<Record<string, Result>>({});
  const [copied, setCopied] = useState(false);
  const [msg, setMsg] = useState("");
  const [summary, setSummary] = useState(false);

  const step = data.steps[active];
  const [id, icon, title, tool, toolUrl, action, prompt, guideTitle, guideText] = step;
  const current = results[id] || { link: "", notes: "" };

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/ia/results?student_id=${encodeURIComponent(studentId)}`);
      const json = await res.json();
      if (!json.ok) return;

      const loadedResults: Record<string, Result> = {};
      json.data.filter((r: any) => r.class_id === classId).reverse().forEach((r: any) => {
        if (!loadedResults[r.step_id]) loadedResults[r.step_id] = { link: r.result_link || "", notes: r.notes || "" };
      });

      const loadedCompleted: Record<string, boolean> = {};
      json.progress.filter((p: any) => p.class_id === classId).forEach((p: any) => {
        loadedCompleted[p.step_id] = p.completed;
      });

      setResults(loadedResults);
      setCompleted(loadedCompleted);
    }

    setActive(0);
    setSummary(false);
    setMsg("");
    load();
  }, [studentId, classId]);

  const completedCount = data.steps.filter((s: any) => completed[s[0]]).length;
  const savedCount = data.steps.filter((s: any) => results[s[0]]?.link || results[s[0]]?.notes).length;
  const progress = Math.round((completedCount / data.steps.length) * 100);

  function updateResult(field: "link" | "notes", value: string) {
    setResults((prev) => ({
      ...prev,
      [id]: { link: prev[id]?.link || "", notes: prev[id]?.notes || "", [field]: value },
    }));
  }

  async function saveResult() {
    setMsg("Guardando...");
    const res = await fetch("/api/ia/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ class_id: classId, step_id: id, result_link: current.link, notes: current.notes, student_id: studentId }),
    });
    const json = await res.json();
    setMsg(json.ok ? "✓ Guardado en Neon" : "Error guardando");
  }

  async function toggleCompleted() {
    const next = !completed[id];
    setCompleted((prev) => ({ ...prev, [id]: next }));
    await fetch("/api/ia/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ class_id: classId, step_id: id, completed: next, student_id: studentId }),
    });
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <main style={main}>
      <div style={layout}>
        <aside style={side}>
          <a href="/ia" style={back}>← Volver al catálogo</a>
          <h3 style={blue}>GUÍA DEL PROFESOR</h3>
          <Card title={guideTitle} text={guideText} />
          <Card title="Qué observar" text="Revise si el alumno entiende la intención antes de ejecutar." />
          <Card title="Errores comunes" text="Crear contenido bonito pero sin objetivo claro." danger />
          <Card title="Cómo corregir" text="Volver al objetivo, al público y al resultado esperado." success />
        </aside>

        <section style={{ display: "grid", gap: 20 }}>
          <header style={hero}>
            <p style={kicker}>IA Aplicada · {data.module}</p>
            <h1 style={h1}>{data.title}</h1>

            <div style={{ marginTop: 18 }}>
              <label style={{ color: "#94a3b8", fontWeight: 800 }}>Alumno activo</label><br />
              <select value={studentId} onChange={(e) => setStudentId(e.target.value)} style={select}>
                <option value="demo-alumno">Demo Alumno</option>
                <option value="alumno-1">Alumno 1</option>
                <option value="alumno-2">Alumno 2</option>
                <option value="alumno-3">Alumno 3</option>
              </select>
            </div>

            <div style={metrics}>
              <Metric label="Clase" value={classId} />
              <Metric label="Paso" value={`${active + 1} de ${data.steps.length}`} />
              <Metric label="Resultados" value={`${savedCount} guardados`} />
              <Metric label="Avance" value={`${progress}%`} green />
            </div>

            <div style={bar}><div style={{ ...fill, width: `${progress}%` }} /></div>
          </header>

          {summary ? (
            <section style={summaryBox}>
              <button onClick={() => setSummary(false)} style={btnDark}>← Volver a clase</button>
              <h2>Resumen final</h2>
              {data.steps.map((s: any) => (
                <article key={s[0]} style={summaryCard}>
                  <strong>{s[1]} Paso {s[1] ? s[2] : ""}</strong>
                  <p style={{ color: "#bfdbfe" }}>{results[s[0]]?.link || "Sin resultado registrado"}</p>
                  <p style={{ color: "#fde68a" }}>{results[s[0]]?.notes || "Sin notas"}</p>
                </article>
              ))}
            </section>
          ) : (
            <>
              <section style={work}>
                <div style={iconBox}>
                  <div style={{ fontSize: 86 }}>{icon}</div>
                  <h2>{title}</h2>
                  <p style={{ color: "#5eead4", fontWeight: 900 }}>Paso {active + 1}</p>
                </div>

                <section style={panel}>
                  <p style={greenTitle}>PANEL ALUMNO · EJECUCIÓN REAL</p>
                  <div style={twoCols}>
                    <div>
                      <h2>Qué hace ahora</h2>
                      <p style={text}>{action}</p>
                    </div>
                    <div style={toolBox}>
                      <strong>Herramienta</strong>
                      <h2>{tool}</h2>
                      {toolUrl ? <a href={toolUrl} target="_blank" rel="noreferrer" style={toolBtn}>Abrir {tool} →</a> : <p>Este paso se trabaja dentro de NOA.</p>}
                    </div>
                  </div>

                  <div style={promptBox}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <strong>Prompt listo para usar</strong>
                      <button onClick={copyPrompt} style={smallBtn}>{copied ? "✓ Copiado" : "Copiar prompt"}</button>
                    </div>
                    <p>{prompt}</p>
                  </div>

                  <div style={resultBox}>
                    <strong>REGISTRO DEL RESULTADO</strong>
                    <input value={current.link} onChange={(e) => updateResult("link", e.target.value)} placeholder="Pegue enlace o resultado" style={input} />
                    <textarea value={current.notes} onChange={(e) => updateResult("notes", e.target.value)} placeholder="Notas del profesor" rows={4} style={input} />
                    <button onClick={saveResult} style={saveBtn}>Guardar resultado en Neon</button>
                    <p style={{ color: "#93c5fd", fontWeight: 800 }}>{msg}</p>
                  </div>

                  <button onClick={toggleCompleted} style={completeBtn}>
                    {completed[id] ? "✓ Paso completado" : "Marcar paso como completado"}
                  </button>
                </section>
              </section>

              <footer style={footer}>
                <button onClick={() => setActive(Math.max(0, active - 1))} style={btnDark}>← Paso anterior</button>
                <button onClick={() => setSummary(true)} style={btnGold}>Resumen final</button>
                <button onClick={() => setActive(Math.min(data.steps.length - 1, active + 1))} style={btnMain}>Siguiente paso →</button>
              </footer>
            </>
          )}
        </section>

        <aside style={side}>
          <h3 style={{ color: "#facc15" }}>CONTROL DE CLASE</h3>
          <h1>{progress}%</h1>
          <p>{completedCount} de {data.steps.length} pasos completados</p>
          <p style={{ color: "#93c5fd", fontWeight: 800 }}>{savedCount} resultados registrados</p>
          {data.steps.map((s: any, i: number) => (
            <button key={s[0]} onClick={() => { setActive(i); setSummary(false); }} style={{ ...stepBtn, borderColor: i === active ? "#38bdf8" : "rgba(148,163,184,.2)" }}>
              <small style={{ color: completed[s[0]] ? "#86efac" : "#94a3b8", fontWeight: 900 }}>{completed[s[0]] ? "✓ COMPLETADO" : "PENDIENTE"}</small>
              <strong style={{ display: "block" }}>{s[1]} Paso {i + 1}: {s[2]}</strong>
              <small>{results[s[0]]?.link || results[s[0]]?.notes ? "Resultado en memoria" : s[3]}</small>
            </button>
          ))}
        </aside>
      </div>
    </main>
  );
}

function Card({ title, text, danger, success }: any) {
  return <div style={card}><strong>{title}</strong><p style={{ color: danger ? "#fca5a5" : success ? "#86efac" : "#cbd5e1", lineHeight: 1.55 }}>{text}</p></div>;
}

function Metric({ label, value, green }: any) {
  return <div style={metric}><small>{label}</small><strong style={{ color: green ? "#86efac" : "#e5e7eb", display: "block", marginTop: 8 }}>{value}</strong></div>;
}

const main = { minHeight: "100vh", background: "radial-gradient(circle at top left, rgba(14,165,233,.22), transparent 32%), linear-gradient(135deg,#020617,#0f172a,#020617)", color: "#e5e7eb", padding: 22 };
const layout = { maxWidth: 1540, margin: "0 auto", display: "grid", gridTemplateColumns: "300px 1fr 310px", gap: 22 };
const side = { border: "1px solid rgba(148,163,184,.2)", background: "rgba(2,6,23,.72)", borderRadius: 28, padding: 22, height: "fit-content", position: "sticky" as const, top: 22 };
const back = { color: "#93c5fd", textDecoration: "none", fontWeight: 900 };
const blue = { color: "#38bdf8", marginTop: 26 };
const hero = { border: "1px solid rgba(148,163,184,.2)", background: "rgba(15,23,42,.8)", borderRadius: 32, padding: 30 };
const kicker = { color: "#7dd3fc", fontWeight: 950 };
const h1 = { fontSize: 48, margin: "14px 0 0" };
const select = { marginTop: 8, width: 260, padding: 12, borderRadius: 14, background: "#020617", color: "white", border: "1px solid rgba(148,163,184,.25)" };
const metrics = { marginTop: 24, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 };
const metric = { border: "1px solid rgba(148,163,184,.16)", background: "rgba(15,23,42,.55)", borderRadius: 18, padding: 14 };
const bar = { marginTop: 24, height: 12, background: "rgba(148,163,184,.18)", borderRadius: 999, overflow: "hidden" };
const fill = { height: "100%", background: "linear-gradient(90deg,#38bdf8,#22c55e)" };
const work = { display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 };
const iconBox = { border: "1px solid rgba(45,212,191,.28)", background: "rgba(15,23,42,.78)", borderRadius: 30, padding: 22, display: "grid", placeItems: "center", minHeight: 420, textAlign: "center" as const };
const panel = { border: "1px solid rgba(34,197,94,.34)", background: "rgba(20,83,45,.28)", borderRadius: 30, padding: 24 };
const greenTitle = { color: "#86efac", fontWeight: 950 };
const twoCols = { display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 18 };
const text = { color: "#dcfce7", lineHeight: 1.65, fontSize: 18 };
const toolBox = { border: "1px solid rgba(34,197,94,.28)", background: "rgba(2,6,23,.42)", borderRadius: 22, padding: 18 };
const toolBtn = { display: "block", textAlign: "center" as const, background: "linear-gradient(135deg,#059669,#0f766e)", color: "white", padding: 12, borderRadius: 14, textDecoration: "none", fontWeight: 900 };
const promptBox = { marginTop: 20, border: "1px solid rgba(45,212,191,.36)", background: "rgba(19,78,74,.46)", borderRadius: 24, padding: 20 };
const smallBtn = { borderRadius: 999, padding: "8px 12px", background: "#0f172a", color: "#ccfbf1", border: "1px solid rgba(45,212,191,.45)" };
const resultBox = { marginTop: 20, border: "1px solid rgba(96,165,250,.32)", background: "rgba(30,64,175,.18)", borderRadius: 24, padding: 20, display: "grid", gap: 12 };
const input = { width: "100%", boxSizing: "border-box" as const, padding: 14, borderRadius: 14, background: "#020617", color: "white", border: "1px solid rgba(147,197,253,.28)" };
const saveBtn = { padding: 14, borderRadius: 16, background: "linear-gradient(135deg,#1d4ed8,#0f766e)", color: "white", border: 0, fontWeight: 950 };
const completeBtn = { marginTop: 22, width: "100%", padding: 17, borderRadius: 20, background: "linear-gradient(135deg,#0284c7,#0f766e)", color: "white", border: 0, fontWeight: 950 };
const footer = { display: "flex", justifyContent: "space-between", gap: 12 };
const btnDark = { padding: "15px 22px", borderRadius: 18, background: "#0f172a", color: "white", border: "1px solid rgba(148,163,184,.28)", fontWeight: 900 };
const btnMain = { padding: "15px 22px", borderRadius: 18, background: "linear-gradient(135deg,#0284c7,#0f766e)", color: "white", border: 0, fontWeight: 900 };
const btnGold = { padding: "15px 22px", borderRadius: 18, background: "rgba(250,204,21,.14)", color: "#fde68a", border: "1px solid rgba(250,204,21,.35)", fontWeight: 900 };
const stepBtn = { width: "100%", marginTop: 10, textAlign: "left" as const, padding: 14, borderRadius: 18, background: "rgba(2,6,23,.34)", color: "#e5e7eb", border: "1px solid rgba(148,163,184,.2)" };
const card = { marginTop: 14, border: "1px solid rgba(148,163,184,.14)", background: "rgba(15,23,42,.58)", borderRadius: 18, padding: 14 };
const summaryBox = { border: "1px solid rgba(250,204,21,.28)", background: "rgba(113,63,18,.18)", borderRadius: 30, padding: 26 };
const summaryCard = { border: "1px solid rgba(148,163,184,.18)", background: "rgba(2,6,23,.35)", borderRadius: 22, padding: 18, marginTop: 14 };
