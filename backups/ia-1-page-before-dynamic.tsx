"use client";

import { useEffect, useMemo, useState } from "react";

const course = {
  name: "IA Aplicada",
  module: "Publicidad con inteligencia artificial",
  classTitle: "Campaña para cafetería",
  classId: "ia-1",
  level: "Inicial / Intermedio",
};

const lessonSteps = [
  {
    id: "brief",
    order: 1,
    title: "Definir el objetivo",
    tag: "Estrategia",
    tool: "Brief de clase",
    toolUrl: "",
    icon: "🎯",
    signal: "Alineación estratégica",
    teacher: {
      say: "Hoy no vamos a crear por crear. Pensamos como agencia: cliente, objetivo y mensaje.",
      observe: "¿El alumno define cliente, producto y objetivo antes de usar herramientas?",
      errors: "Ir directo a generar contenido sin intención clara.",
      fix: "Regresar al brief: cliente, producto, objetivo y tono.",
    },
    student: {
      action: "Defina el cliente, producto y objetivo comercial.",
      prompt:
        "Cliente: cafetería local. Producto: café frío con repostería. Objetivo: atraer clientes en horario de tarde.",
      expected:
        "El alumno puede explicar para quién crea, qué ofrece y qué quiere lograr.",
      resultLabel: "Brief del alumno",
    },
  },
  {
    id: "image",
    order: 2,
    title: "Crear la imagen",
    tag: "Visual",
    tool: "Ideogram",
    toolUrl: "https://ideogram.ai",
    icon: "☕",
    signal: "Impacto visual",
    teacher: {
      say: "La imagen debe vender. Si se ve genérica, no sirve.",
      observe: "¿La imagen transmite ambiente, producto y deseo?",
      errors: "Prompts vagos, imágenes sin foco o con texto innecesario.",
      fix: "Agregar luz, ambiente, producto, emoción y aclarar sin texto.",
    },
    student: {
      action: "Genere una imagen publicitaria para la cafetería.",
      prompt:
        "Fotografía publicitaria realista de café frío con repostería artesanal, mesa de madera, luz natural de tarde, ambiente cálido, estilo premium, sin texto.",
      expected:
        "Una imagen clara, atractiva y alineada con una campaña comercial.",
      resultLabel: "Link de imagen creada",
    },
  },
  {
    id: "music",
    order: 3,
    title: "Crear la música",
    tag: "Audio",
    tool: "Suno",
    toolUrl: "https://suno.ai",
    icon: "🎧",
    signal: "Coherencia emocional",
    teacher: {
      say: "La música acompaña la marca. No es relleno.",
      observe: "¿La música transmite la misma emoción que la imagen?",
      errors: "Elegir música genérica o que choque con el concepto visual.",
      fix: "Definir primero la emoción: cálida, moderna, relajada y comercial.",
    },
    student: {
      action: "Cree una pista musical corta para acompañar el anuncio.",
      prompt:
        "Pista instrumental corta, cálida, moderna y relajada para anuncio de cafetería artesanal en horario de tarde, estilo comercial premium.",
      expected:
        "Una música coherente con el ambiente visual y el mensaje de la campaña.",
      resultLabel: "Link de música creada",
    },
  },
  {
    id: "video",
    order: 4,
    title: "Crear el video",
    tag: "Movimiento",
    tool: "Pika",
    toolUrl: "https://pika.art",
    icon: "🎬",
    signal: "Narrativa en movimiento",
    teacher: {
      say: "El movimiento debe dirigir la atención. Movimiento sin intención es ruido.",
      observe: "¿El video guía la mirada hacia el producto?",
      errors: "Animación exagerada, movimientos raros o pérdida del foco comercial.",
      fix: "Reducir movimiento, mantener cámara suave y reforzar el producto.",
    },
    student: {
      action: "Anime la imagen para convertirla en un video corto.",
      prompt:
        "Anima esta imagen con movimiento suave de cámara hacia el producto, ambiente cálido, sensación premium de cafetería, estilo anuncio comercial de 8 segundos.",
      expected:
        "Un video corto donde el movimiento refuerza el producto y no distrae.",
      resultLabel: "Link de video creado",
    },
  },
  {
    id: "closing",
    order: 5,
    title: "Cierre y presentación",
    tag: "Evaluación",
    tool: "Presentación",
    toolUrl: "",
    icon: "✅",
    signal: "Criterio aplicado",
    teacher: {
      say: "Esto no era usar herramientas. Era construir una pieza con intención.",
      observe: "¿El alumno puede justificar sus decisiones?",
      errors: "Mostrar el resultado sin explicar estrategia, intención o mejora.",
      fix: "Pedir explicación: qué buscó comunicar, qué funcionó y qué cambiaría.",
    },
    student: {
      action: "Presente el resultado final y explique la intención.",
      prompt:
        "La pieza busca atraer clientes en horario de tarde mostrando una experiencia cálida, moderna y apetecible. Usé imagen, música y video para reforzar esa intención.",
      expected:
        "El alumno justifica su trabajo con criterio, no solo muestra algo bonito.",
      resultLabel: "Conclusión del alumno",
    },
  },
];

type StudentResult = {
  link: string;
  notes: string;
};

type ApiRow = {
  class_id: string;
  step_id: string;
  result_link: string | null;
  notes: string | null;
};

export default function ClaseIAFinalPage() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [results, setResults] = useState<Record<string, StudentResult>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");

  const current = lessonSteps[active];
  const currentResult = results[current.id] || { link: "", notes: "" };

  useEffect(() => {
    async function loadResults() {
      try {
        const res = await fetch("/api/ia/results");
        const json = await res.json();

        if (!json.ok) return;

        const loaded: Record<string, StudentResult> = {};

        (json.data as ApiRow[])
          .filter((row) => row.class_id === course.classId)
          .reverse()
          .forEach((row) => {
            if (!loaded[row.step_id]) {
              loaded[row.step_id] = {
                link: row.result_link || "",
                notes: row.notes || "",
              };
            }
          });

        setResults(loaded);
      } catch {
        setSaveStatus("No se pudieron cargar resultados.");
      }
    }

    loadResults();
  }, []);

  const completedCount = useMemo(
    () => lessonSteps.filter((step) => completed[step.id]).length,
    [completed]
  );

  const savedCount = useMemo(
    () =>
      lessonSteps.filter((step) => {
        const result = results[step.id];
        return Boolean(result?.link || result?.notes);
      }).length,
    [results]
  );

  const progress = Math.round((completedCount / lessonSteps.length) * 100);

  const statusText =
    progress === 100
      ? "Clase lista para cierre"
      : progress >= 60
      ? "Clase en ejecución avanzada"
      : progress >= 20
      ? "Clase en desarrollo"
      : "Clase iniciando";

  function toggleCompleted(id: string) {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function updateResult(field: keyof StudentResult, value: string) {
    setResults((prev) => ({
      ...prev,
      [current.id]: {
        link: prev[current.id]?.link || "",
        notes: prev[current.id]?.notes || "",
        [field]: value,
      },
    }));
  }

  async function saveCurrentResult() {
    setSaveStatus("Guardando...");

    try {
      const res = await fetch("/api/ia/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          class_id: course.classId,
          step_id: current.id,
          result_link: currentResult.link,
          notes: currentResult.notes,
        }),
      });

      const json = await res.json();

      if (!json.ok) {
        setSaveStatus("Error guardando en Neon.");
        return;
      }

      setSaveStatus("✓ Guardado en Neon");
    } catch {
      setSaveStatus("Error de conexión al guardar.");
    }
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(current.student.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main style={mainStyle}>
      <div style={layoutStyle}>
        <aside style={leftPanelStyle}>
          <a href="/ia" style={backLinkStyle}>
            ← Volver al catálogo
          </a>

          <p style={{ margin: "0 0 14px", color: "#38bdf8", fontWeight: 950 }}>
            GUÍA DEL PROFESOR
          </p>

          <TeacherCard title="Qué decir" text={current.teacher.say} />
          <TeacherCard title="Qué observar" text={current.teacher.observe} />
          <TeacherCard title="Errores comunes" text={current.teacher.errors} danger />
          <TeacherCard title="Cómo corregir" text={current.teacher.fix} success />
        </aside>

        <section style={{ display: "grid", gap: "20px" }}>
          <header style={headerStyle}>
            <p style={{ margin: 0, color: "#7dd3fc", fontWeight: 950 }}>
              {course.name} · {course.module}
            </p>

            <h1 style={{ margin: "14px 0 0", fontSize: "48px" }}>
              {course.classTitle}
            </h1>

            <section style={metricsGridStyle}>
              <Metric label="Paso activo" value={`${current.order} de 5`} />
              <Metric label="Herramienta" value={current.tool} />
              <Metric label="Resultados" value={`${savedCount} guardados`} />
              <Metric label="Estado" value={statusText} green />
            </section>

            <div style={progressTrackStyle}>
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #38bdf8, #22c55e)",
                }}
              />
            </div>
          </header>

          {showSummary ? (
            <SummaryPanel
              results={results}
              completed={completed}
              completedCount={completedCount}
              savedCount={savedCount}
              progress={progress}
              onBack={() => setShowSummary(false)}
            />
          ) : (
            <>
              <section style={lessonGridStyle}>
                <div style={iconPanelStyle}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "86px", marginBottom: "16px" }}>
                      {current.icon}
                    </div>
                    <p style={{ color: "#5eead4", fontWeight: 950 }}>
                      Paso {current.order}
                    </p>
                    <h2 style={{ margin: "8px 0 0", fontSize: "28px" }}>
                      {current.title}
                    </h2>
                  </div>
                </div>

                <section style={studentPanelStyle}>
                  <p style={{ margin: 0, color: "#86efac", fontWeight: 950 }}>
                    PANEL ALUMNO · EJECUCIÓN REAL
                  </p>

                  <div style={studentTopGridStyle}>
                    <div>
                      <h2 style={{ margin: "0 0 10px", fontSize: "30px" }}>
                        Qué hace ahora
                      </h2>
                      <p style={{ color: "#dcfce7", lineHeight: "1.65", fontSize: "18px" }}>
                        {current.student.action}
                      </p>
                    </div>

                    <div style={toolBoxStyle}>
                      <strong style={{ color: "#bbf7d0" }}>Herramienta</strong>
                      <p style={{ fontSize: "26px", fontWeight: 950, margin: "8px 0 14px" }}>
                        {current.tool}
                      </p>

                      {current.toolUrl ? (
                        <a
                          href={current.toolUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={toolButtonStyle}
                        >
                          Abrir {current.tool} →
                        </a>
                      ) : (
                        <p style={{ color: "#94a3b8", margin: 0 }}>
                          Este paso se trabaja dentro de NOA.
                        </p>
                      )}
                    </div>
                  </div>

                  <PromptBox copied={copied} copyPrompt={copyPrompt} text={current.student.prompt} />

                  <div style={expectedBoxStyle}>
                    <p style={{ margin: "0 0 10px", color: "#fde68a", fontWeight: 950 }}>
                      Resultado esperado
                    </p>
                    <p style={{ margin: 0, color: "#fef3c7", lineHeight: "1.65" }}>
                      {current.student.expected}
                    </p>
                  </div>

                  <section style={resultBoxStyle}>
                    <p style={{ margin: "0 0 14px", color: "#bfdbfe", fontWeight: 950 }}>
                      REGISTRO DEL RESULTADO
                    </p>

                    <label style={labelStyle}>{current.student.resultLabel}</label>

                    <input
                      value={currentResult.link}
                      onChange={(e) => updateResult("link", e.target.value)}
                      placeholder="Pegue aquí el enlace o resultado generado"
                      style={inputStyle}
                    />

                    <label style={{ ...labelStyle, marginTop: "16px" }}>
                      Notas del profesor
                    </label>

                    <textarea
                      value={currentResult.notes}
                      onChange={(e) => updateResult("notes", e.target.value)}
                      placeholder="Anote observaciones, mejoras o correcciones"
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />

                    <button onClick={saveCurrentResult} style={saveButtonStyle}>
                      Guardar resultado en Neon
                    </button>

                    <p style={{ margin: "12px 0 0", color: "#93c5fd", fontWeight: 800 }}>
                      {saveStatus ||
                        (currentResult.link || currentResult.notes
                          ? "Resultado listo para guardar"
                          : "Pendiente de registrar resultado")}
                    </p>
                  </section>

                  <button
                    onClick={() => toggleCompleted(current.id)}
                    style={{
                      marginTop: "22px",
                      width: "100%",
                      padding: "17px 20px",
                      borderRadius: "20px",
                      border: completed[current.id]
                        ? "1px solid rgba(34,197,94,.78)"
                        : "1px solid rgba(56,189,248,.68)",
                      background: completed[current.id]
                        ? "linear-gradient(135deg, #15803d, #166534)"
                        : "linear-gradient(135deg, #0284c7, #0f766e)",
                      color: "white",
                      fontWeight: 950,
                      cursor: "pointer",
                    }}
                  >
                    {completed[current.id]
                      ? "✓ Paso completado"
                      : "Marcar este paso como completado"}
                  </button>
                </section>
              </section>

              <footer style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  style={navButtonStyle(active === 0)}
                >
                  ← Paso anterior
                </button>

                <button onClick={() => setShowSummary(true)} style={navButtonStyle(false, true)}>
                  Ver resumen final →
                </button>

                <button
                  onClick={() => setActive(Math.min(lessonSteps.length - 1, active + 1))}
                  disabled={active === lessonSteps.length - 1}
                  style={navButtonStyle(active === lessonSteps.length - 1, true)}
                >
                  Siguiente paso →
                </button>
              </footer>
            </>
          )}
        </section>

        <aside style={rightPanelStyle}>
          <p style={{ margin: "0 0 10px", color: "#facc15", fontWeight: 950 }}>
            CONTROL DE CLASE
          </p>

          <h2 style={{ margin: "0 0 4px", fontSize: "44px" }}>{progress}%</h2>

          <p style={{ margin: "0 0 18px", color: "#cbd5e1" }}>
            {completedCount} de {lessonSteps.length} pasos completados
          </p>

          <p style={{ margin: "0 0 18px", color: "#93c5fd", fontWeight: 800 }}>
            {savedCount} resultados cargados/registrados
          </p>

          <button onClick={() => setShowSummary(true)} style={summaryButtonStyle}>
            Resumen final
          </button>

          <div style={{ display: "grid", gap: "10px" }}>
            {lessonSteps.map((step, index) => {
              const hasResult = Boolean(results[step.id]?.link || results[step.id]?.notes);

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setShowSummary(false);
                    setActive(index);
                    setSaveStatus("");
                  }}
                  style={{
                    cursor: "pointer",
                    textAlign: "left",
                    border:
                      active === index && !showSummary
                        ? "1px solid rgba(56,189,248,.86)"
                        : completed[step.id]
                        ? "1px solid rgba(34,197,94,.38)"
                        : "1px solid rgba(148,163,184,.18)",
                    background:
                      active === index && !showSummary
                        ? "rgba(14,165,233,.18)"
                        : completed[step.id]
                        ? "rgba(34,197,94,.12)"
                        : "rgba(2,6,23,.34)",
                    color: "#e5e7eb",
                    borderRadius: "18px",
                    padding: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: completed[step.id] ? "#86efac" : "#94a3b8",
                      fontWeight: 950,
                    }}
                  >
                    {completed[step.id] ? "✓ COMPLETADO" : "PENDIENTE"}
                  </span>

                  <strong style={{ display: "block", marginTop: "6px" }}>
                    {step.icon} Paso {step.order}: {step.title}
                  </strong>

                  <small
                    style={{
                      display: "block",
                      marginTop: "6px",
                      color: hasResult ? "#93c5fd" : "#94a3b8",
                    }}
                  >
                    {hasResult ? "Resultado en memoria" : step.tool}
                  </small>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}

function SummaryPanel({
  results,
  completed,
  completedCount,
  savedCount,
  progress,
  onBack,
}: {
  results: Record<string, StudentResult>;
  completed: Record<string, boolean>;
  completedCount: number;
  savedCount: number;
  progress: number;
  onBack: () => void;
}) {
  return (
    <section style={summaryPanelStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <div>
          <p style={{ margin: 0, color: "#facc15", fontWeight: 950 }}>
            RESUMEN FINAL DE CLASE
          </p>
          <h2 style={{ margin: "10px 0 0", fontSize: "38px" }}>
            Evidencia y cierre del alumno
          </h2>
        </div>

        <button onClick={onBack} style={navButtonStyle(false)}>
          ← Volver a la clase
        </button>
      </div>

      <section style={summaryMetricGridStyle}>
        <Metric label="Avance" value={`${progress}%`} green />
        <Metric label="Pasos completados" value={`${completedCount} de ${lessonSteps.length}`} />
        <Metric label="Resultados guardados" value={`${savedCount}`} />
      </section>

      <div style={{ marginTop: "22px", display: "grid", gap: "14px" }}>
        {lessonSteps.map((step) => {
          const result = results[step.id] || { link: "", notes: "" };
          const done = completed[step.id];

          return (
            <article
              key={step.id}
              style={{
                border: done
                  ? "1px solid rgba(34,197,94,.34)"
                  : "1px solid rgba(148,163,184,.18)",
                background: done ? "rgba(22,163,74,.12)" : "rgba(2,6,23,.35)",
                borderRadius: "22px",
                padding: "18px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}>
                <h3 style={{ margin: 0 }}>
                  {step.icon} Paso {step.order}: {step.title}
                </h3>
                <span style={{ color: done ? "#86efac" : "#cbd5e1", fontWeight: 900 }}>
                  {done ? "✓ completado" : "pendiente"}
                </span>
              </div>

              <p style={{ margin: "12px 0 8px", color: "#bfdbfe", fontWeight: 900 }}>
                {step.student.resultLabel}
              </p>

              <p style={{ margin: 0, color: result.link ? "#e5e7eb" : "#94a3b8", wordBreak: "break-word" }}>
                {result.link || "Sin resultado registrado."}
              </p>

              <p style={{ margin: "14px 0 8px", color: "#fde68a", fontWeight: 900 }}>
                Notas del profesor
              </p>

              <p style={{ margin: 0, color: result.notes ? "#fef3c7" : "#94a3b8", lineHeight: "1.6" }}>
                {result.notes || "Sin notas."}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PromptBox({
  copied,
  copyPrompt,
  text,
}: {
  copied: boolean;
  copyPrompt: () => void;
  text: string;
}) {
  return (
    <div style={promptBoxStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "14px" }}>
        <p style={{ margin: 0, color: "#5eead4", fontWeight: 950 }}>
          Prompt listo para usar
        </p>

        <button onClick={copyPrompt} style={copyButtonStyle(copied)}>
          {copied ? "✓ Copiado" : "Copiar prompt"}
        </button>
      </div>

      <p style={{ margin: "14px 0 0", color: "#ccfbf1", lineHeight: "1.7" }}>
        “{text}”
      </p>
    </div>
  );
}

function TeacherCard({
  title,
  text,
  danger = false,
  success = false,
}: {
  title: string;
  text: string;
  danger?: boolean;
  success?: boolean;
}) {
  return (
    <div style={teacherCardStyle}>
      <strong style={{ display: "block", marginBottom: "8px" }}>{title}</strong>
      <p
        style={{
          margin: 0,
          color: danger ? "#fca5a5" : success ? "#86efac" : "#cbd5e1",
          lineHeight: "1.55",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
  green = false,
}: {
  label: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div style={metricStyle}>
      <p style={{ margin: "0 0 6px", color: "#94a3b8", fontSize: "12px" }}>
        {label}
      </p>
      <p style={{ margin: 0, color: green ? "#86efac" : "#e5e7eb", fontWeight: 950 }}>
        {value}
      </p>
    </div>
  );
}

const mainStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, rgba(14,165,233,.22), transparent 32%), radial-gradient(circle at top right, rgba(16,185,129,.16), transparent 30%), linear-gradient(135deg, #020617, #0f172a 52%, #020617)",
  color: "#e5e7eb",
  padding: "22px",
  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
};

const layoutStyle = {
  maxWidth: "1540px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "300px 1fr 310px",
  gap: "22px",
};

const leftPanelStyle = {
  border: "1px solid rgba(56,189,248,.24)",
  background: "rgba(2,6,23,.72)",
  borderRadius: "28px",
  padding: "22px",
  minHeight: "calc(100vh - 44px)",
  position: "sticky" as const,
  top: "22px",
};

const rightPanelStyle = {
  border: "1px solid rgba(148,163,184,.2)",
  background: "linear-gradient(180deg, rgba(15,23,42,.86), rgba(2,6,23,.82))",
  borderRadius: "28px",
  padding: "20px",
  position: "sticky" as const,
  top: "22px",
  height: "fit-content",
};

const backLinkStyle = {
  color: "#93c5fd",
  textDecoration: "none",
  fontWeight: 900,
  marginBottom: "22px",
  display: "inline-block",
};

const headerStyle = {
  border: "1px solid rgba(148,163,184,.2)",
  background: "linear-gradient(180deg, rgba(15,23,42,.88), rgba(2,6,23,.72))",
  borderRadius: "32px",
  padding: "30px",
};

const metricsGridStyle = {
  marginTop: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "12px",
};

const progressTrackStyle = {
  marginTop: "24px",
  height: "12px",
  background: "rgba(148,163,184,.18)",
  borderRadius: "999px",
  overflow: "hidden",
};

const lessonGridStyle = {
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  gap: "20px",
};

const iconPanelStyle = {
  border: "1px solid rgba(45,212,191,.28)",
  background: "radial-gradient(circle at center, rgba(45,212,191,.18), rgba(15,23,42,.78))",
  borderRadius: "30px",
  padding: "22px",
  display: "grid",
  placeItems: "center",
  minHeight: "420px",
};

const studentPanelStyle = {
  border: "1px solid rgba(34,197,94,.34)",
  background: "linear-gradient(180deg, rgba(20,83,45,.34), rgba(15,23,42,.72))",
  borderRadius: "30px",
  padding: "24px",
};

const studentTopGridStyle = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "1.15fr .85fr",
  gap: "18px",
};

const toolBoxStyle = {
  border: "1px solid rgba(34,197,94,.28)",
  background: "rgba(2,6,23,.42)",
  borderRadius: "22px",
  padding: "18px",
};

const toolButtonStyle = {
  display: "block",
  textAlign: "center" as const,
  textDecoration: "none",
  background: "linear-gradient(135deg, #059669, #0f766e)",
  color: "white",
  padding: "12px",
  borderRadius: "14px",
  fontWeight: 900,
};

const expectedBoxStyle = {
  marginTop: "20px",
  border: "1px solid rgba(251,191,36,.3)",
  background: "rgba(113,63,18,.25)",
  borderRadius: "24px",
  padding: "20px",
};

const resultBoxStyle = {
  marginTop: "20px",
  border: "1px solid rgba(96,165,250,.32)",
  background: "rgba(30,64,175,.18)",
  borderRadius: "24px",
  padding: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
  color: "#dbeafe",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(147,197,253,.28)",
  background: "rgba(2,6,23,.55)",
  color: "white",
  outline: "none",
};

const saveButtonStyle = {
  marginTop: "16px",
  width: "100%",
  padding: "14px",
  borderRadius: "16px",
  border: "1px solid rgba(147,197,253,.38)",
  background: "linear-gradient(135deg, #1d4ed8, #0f766e)",
  color: "white",
  fontWeight: 950,
  cursor: "pointer",
};

const summaryButtonStyle = {
  width: "100%",
  marginBottom: "16px",
  padding: "13px",
  borderRadius: "16px",
  border: "1px solid rgba(250,204,21,.35)",
  background: "rgba(250,204,21,.14)",
  color: "#fde68a",
  fontWeight: 950,
  cursor: "pointer",
};

const summaryPanelStyle = {
  border: "1px solid rgba(250,204,21,.28)",
  background: "linear-gradient(180deg, rgba(113,63,18,.24), rgba(15,23,42,.76))",
  borderRadius: "30px",
  padding: "26px",
};

const summaryMetricGridStyle = {
  marginTop: "22px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
};

const promptBoxStyle = {
  marginTop: "20px",
  border: "1px solid rgba(45,212,191,.36)",
  background: "rgba(19,78,74,.46)",
  borderRadius: "24px",
  padding: "20px",
};

const teacherCardStyle = {
  marginTop: "14px",
  border: "1px solid rgba(148,163,184,.14)",
  background: "rgba(15,23,42,.58)",
  borderRadius: "18px",
  padding: "14px",
};

const metricStyle = {
  border: "1px solid rgba(148,163,184,.16)",
  background: "rgba(15,23,42,.55)",
  borderRadius: "18px",
  padding: "14px",
};

function copyButtonStyle(copied: boolean) {
  return {
    cursor: "pointer",
    border: "1px solid rgba(45,212,191,.45)",
    background: copied ? "rgba(34,197,94,.28)" : "rgba(15,23,42,.72)",
    color: copied ? "#bbf7d0" : "#ccfbf1",
    borderRadius: "999px",
    padding: "9px 13px",
    fontWeight: 900,
  };
}

function navButtonStyle(disabled: boolean, primary = false) {
  return {
    padding: "15px 22px",
    borderRadius: "18px",
    border: primary
      ? "1px solid rgba(56,189,248,.65)"
      : "1px solid rgba(148,163,184,.28)",
    background: primary
      ? "linear-gradient(135deg, #0284c7, #0f766e)"
      : "rgba(15,23,42,.9)",
    color: "white",
    fontWeight: 950,
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };
}
