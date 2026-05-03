"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const LESSONS: any = {
  "ia-1": {
    title: "Pedir bien para obtener algo útil",
    module: "IA práctica desde el celular",
    product: "Mensaje final listo para WhatsApp",
    steps: [
      {
        time: "0–15 min",
        title: "Arranque: primero hacemos, después corregimos",
        student: "Abrir ChatGPT y pedir un primer mensaje real.",
        prompt: "Escríbame un mensaje para ofrecer [producto o servicio] a [tipo de persona], con tono amable y claro.",
        expected: "Todos tienen una primera respuesta generada.",
        teacher: {
          say: "Hoy no venimos a escuchar teoría. Hoy cada persona va a crear un mensaje real desde el celular.",
          example: "Si vende comida casera, no vamos a hablar de IA: vamos a crear un mensaje para ofrecer esa comida.",
          ask: "¿Qué quiere comunicar hoy de verdad?",
          objective: "Quitar miedo y lograr que todos arranquen.",
          signal_ok: "El alumno ya tiene una respuesta en ChatGPT.",
          alert: "El alumno se queda pensando demasiado y no escribe nada.",
          intervention: "Dígale: escriba algo imperfecto. Primero lo sacamos, luego lo mejoramos.",
          evaluate: "Debe tener un primer texto generado, aunque esté flojo.",
          close: "Ya tenemos materia prima. Ahora sí podemos trabajar.",
          checklist: "✔ Abrió ChatGPT\n✔ Escribió un caso real\n✔ Generó una primera respuesta\n✔ No se quedó esperando perfección",
        },
      },
      {
        time: "15–30 min",
        title: "Golpe de realidad: se ve bonito, pero no necesariamente sirve",
        student: "Leer el primer mensaje y detectar si es genérico, largo, frío o poco claro.",
        prompt: "Revise este mensaje y dígame si es claro, concreto y si invita a responder. Señale qué está flojo.",
        expected: "El alumno entiende que la primera respuesta no siempre sirve.",
        teacher: {
          say: "ChatGPT puede escribir bonito y aun así no servir. Bonito no significa útil.",
          example: "“Disfrute comida deliciosa” suena bien, pero lo puede decir cualquiera.",
          ask: "¿Usted respondería este mensaje si se lo mandan por WhatsApp?",
          objective: "Formar criterio para no copiar la primera respuesta.",
          signal_ok: "El alumno puede decir qué está flojo en su texto.",
          alert: "El alumno cree que porque suena bonito ya está listo.",
          intervention: "Pídale encontrar una frase concreta que invite a actuar. Si no existe, no está listo.",
          evaluate: "Debe detectar al menos una debilidad del mensaje.",
          close: "La IA no falló. El pedido estaba incompleto.",
          checklist: "✔ Detectó si es genérico\n✔ Vio si falta acción\n✔ Revisó claridad\n✔ No copió sin pensar",
        },
      },
      {
        time: "30–45 min",
        title: "Diagnóstico: qué le falta a un mensaje útil",
        student: "Marcar producto, público, beneficio, tono, canal y acción final.",
        prompt: "Analice este mensaje usando esta lista: producto, público, beneficio, tono, canal y acción final.",
        expected: "El alumno sabe qué revisar antes de mejorar.",
        teacher: {
          say: "Un mensaje útil no solo dice algo. Debe decirlo a alguien, con una intención y una acción clara.",
          example: "No es igual decir “vendo queques” que “hoy tengo queques caseros listos para entregar en la tarde”.",
          ask: "¿Qué ofrece, a quién, por qué le interesa y qué debe hacer esa persona?",
          objective: "Enseñar criterios prácticos de revisión.",
          signal_ok: "El alumno identifica qué parte falta en su mensaje.",
          alert: "El alumno solo dice: está bonito, está bien o me gusta.",
          intervention: "Oblíguelo a revisar con la lista, no con gusto personal.",
          evaluate: "Debe completar producto, público, beneficio, tono, canal y acción.",
          close: "Sin diagnóstico, mejorar es adivinar.",
          checklist: "✔ Producto claro\n✔ Público claro\n✔ Beneficio claro\n✔ Canal claro\n✔ Acción final clara",
        },
      },
      {
        time: "45–60 min",
        title: "Pedir mejor: darle contexto a la IA",
        student: "Reescribir el pedido con contexto completo.",
        prompt: "Actúe como experto en comunicación por WhatsApp. Soy [quién soy]. Ofrezco [producto o servicio]. Mi público es [tipo de persona]. Quiero que el mensaje logre [acción]. Use tono [tono].",
        expected: "El segundo resultado debe ser más claro que el primero.",
        teacher: {
          say: "La IA no adivina. La IA obedece. Si usted da poco contexto, recibe una respuesta pobre.",
          example: "Soy una persona que vende comida casera a gente que trabaja cerca y quiero que me pidan el menú.",
          ask: "¿Qué información necesita la IA para no inventar?",
          objective: "Aprender a dar contexto útil.",
          signal_ok: "El alumno nota diferencia entre el primer y segundo resultado.",
          alert: "El alumno vuelve a pedir algo corto y genérico.",
          intervention: "Pídale completar: soy, ofrezco, público, objetivo, tono.",
          evaluate: "El prompt debe tener contexto mínimo completo.",
          close: "Más contexto, mejor dirección.",
          checklist: "✔ Dijo quién es\n✔ Dijo qué ofrece\n✔ Dijo a quién habla\n✔ Dijo qué busca lograr\n✔ Definió tono",
        },
      },
      {
        time: "60–75 min",
        title: "Construcción guiada: el prompt completo",
        student: "Armar su prompt maestro con caso propio.",
        prompt: "Soy [quién soy]. Necesito comunicar [qué]. Mi público es [quién]. Lo voy a usar en [WhatsApp/redes/estado]. Quiero un tono [cercano/profesional/directo]. El mensaje debe terminar invitando a [acción].",
        expected: "Cada alumno tiene su fórmula para pedir mejor.",
        teacher: {
          say: "No copie mi ejemplo. Use su realidad. Si el caso no es suyo, el aprendizaje queda decorativo.",
          example: "Soy una persona que da clases de repostería y quiero invitar a un taller básico.",
          ask: "¿Cuál es su caso real?",
          objective: "Crear una estructura repetible.",
          signal_ok: "El alumno puede adaptar el prompt a su situación.",
          alert: "El alumno copia literal y no personaliza.",
          intervention: "Pregúntele: ¿qué cambiaría para que esto sea suyo?",
          evaluate: "Debe tener un prompt propio y aplicable.",
          close: "Esto ya no es un prompt suelto. Es una forma de trabajar.",
          checklist: "✔ Caso real\n✔ Público real\n✔ Canal real\n✔ Tono definido\n✔ Acción final",
        },
      },
      {
        time: "75–90 min",
        title: "Mejoras por capas",
        student: "Mejorar el mensaje una capa a la vez.",
        prompt: "1. Hágalo más claro.\n2. Hágalo más corto.\n3. Hágalo más cercano.\n4. Agregue una invitación clara para responder.\n5. Déjeme una versión final lista para WhatsApp.",
        expected: "El mensaje mejora paso a paso.",
        teacher: {
          say: "No se mejora todo de una vez. Se mejora por capas: claridad, brevedad, tono y acción.",
          example: "Antes: “Tenemos comida disponible”. Después: “Hola, hoy tengo comida casera lista para el almuerzo. Si quiere apartar, escríbame y le paso el menú.”",
          ask: "¿Qué capa necesita más su mensaje?",
          objective: "Enseñar iteración práctica.",
          signal_ok: "El alumno ve mejora concreta entre versiones.",
          alert: "El alumno pide 'mejórelo' sin dirección.",
          intervention: "Dígale que elija una capa: claridad, corto, cercano o acción.",
          evaluate: "Debe tener una versión final mejor que la inicial.",
          close: "La primera respuesta nunca es la final.",
          checklist: "✔ Más claro\n✔ Más corto\n✔ Más humano\n✔ Con acción\n✔ Listo para WhatsApp",
        },
      },
      {
        time: "90–105 min",
        title: "Usar ChatGPT como corrector",
        student: "Pegar su versión final y pedir crítica.",
        prompt: "Revise este mensaje como si usted fuera la persona que lo recibe. Dígame qué está flojo, qué sobra, qué no se entiende y cómo hacerlo más efectivo.",
        expected: "El alumno aprende a usar IA para revisar, no solo escribir.",
        teacher: {
          say: "La IA no solo escribe. También puede revisar, criticar y ayudarle a pensar mejor.",
          example: "Puede decirle que falta acción, que está largo o que no se entiende el beneficio.",
          ask: "¿Qué le señaló la IA que usted no había visto?",
          objective: "Desarrollar autonomía de revisión.",
          signal_ok: "El alumno acepta o rechaza sugerencias con criterio.",
          alert: "El alumno acepta todo lo que dice la IA sin pensar.",
          intervention: "Recuérdele: la IA propone, usted decide.",
          evaluate: "Debe justificar qué cambios acepta.",
          close: "No piense solo. Piense con la IA.",
          checklist: "✔ Pidió crítica\n✔ Revisó sugerencias\n✔ Eligió cambios\n✔ No aceptó todo a ciegas",
        },
      },
      {
        time: "105–115 min",
        title: "Versión final: dejarlo listo",
        student: "Pedir versión final limpia y copiarla.",
        prompt: "Con las mejoras anteriores, déjeme una versión final corta, clara, cercana y lista para enviar por WhatsApp.",
        expected: "Mensaje final terminado.",
        teacher: {
          say: "No nos quedamos en borrador. La clase termina con algo listo para usar.",
          example: "Hola, hoy tengo almuerzos caseros listos para entregar. Si quiere comer rico sin cocinar, escríbame y le paso el menú disponible.",
          ask: "¿Este mensaje se puede enviar tal como está?",
          objective: "Cerrar con producto terminado.",
          signal_ok: "El alumno tiene una versión final copiada.",
          alert: "El alumno sigue ajustando sin cerrar.",
          intervention: "Dígale: elija una versión y cierre. Mejor hecho que eterno.",
          evaluate: "Debe tener saludo, oferta, beneficio y acción.",
          close: "Ya no es práctica. Es material usable.",
          checklist: "✔ Saludo\n✔ Oferta clara\n✔ Beneficio\n✔ Acción\n✔ Copiado para usar",
        },
      },
      {
        time: "115–120 min",
        title: "Cierre: esto se usa hoy",
        student: "Definir dónde, cuándo y con quién usará el mensaje.",
        prompt: "Voy a usar este mensaje hoy en [WhatsApp/estado/grupo] con [persona o público] para lograr [acción].",
        expected: "Compromiso de uso real.",
        teacher: {
          say: "Si se queda guardado, no sirvió. Esto se valida usándolo.",
          example: "Lo enviaré hoy a tres clientes conocidos para ofrecerles el menú de almuerzo.",
          ask: "¿Dónde lo va a usar hoy?",
          objective: "Conectar aprendizaje con aplicación inmediata.",
          signal_ok: "El alumno define una acción concreta.",
          alert: "El alumno dice 'después lo uso'.",
          intervention: "Pídale fecha, canal y persona. Sin eso es humo.",
          evaluate: "Debe salir con acción concreta y medible.",
          close: "Hoy no aprendió un prompt. Aprendió un método.",
          checklist: "✔ Canal definido\n✔ Persona o público definido\n✔ Hora o momento definido\n✔ Acción concreta",
        },
      },
    ],
  },
};

export default function Page() {
  const params = useParams();
  const rawId = String(params?.id || "ia-1");
  const classId = rawId.startsWith("ia-") ? rawId : `ia-${rawId}`;
  const lesson = LESSONS[classId] || LESSONS["ia-1"];
  const [active, setActive] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [syncStatus, setSyncStatus] = useState("Sin sincronizar");

  const step = lesson.steps[active];

  async function syncBlock(nextBlock: number) {
    const safeBlock = Math.max(0, Math.min(lesson.steps.length - 1, nextBlock));
    setActive(safeBlock);
    setSyncStatus("Guardando en Neon...");

    try {
      const res = await fetch("/api/class-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ class_id: classId, current_block: safeBlock }),
      });

      if (!res.ok) {
        setSyncStatus("Error guardando: " + res.status);
        return;
      }

      const json = await res.json();
      setSyncStatus("Sincronizado en Neon: bloque " + (json.current_block + 1));
    } catch (error) {
      setSyncStatus("Error de conexión con API");
    }
  }

  async function askExpert() {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/profesor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pregunta: question,
          contexto: {
            clase: classId,
            bloque: step.title,
            objetivo: step.teacher.objective,
            alerta: step.teacher.alert,
            intervencion: step.teacher.intervention,
          },
        }),
      });

      const json = await res.json();
      setAnswer(json.respuesta || "Sin respuesta del experto.");
    } catch {
      setAnswer("No pude consultar al experto. Revise el server local.");
    }

    setLoading(false);
  }

  return (
    <main style={main}>
      <Link href={`/ia/${classId}/presentacion`} style={studentLink}>→ Ver presentación alumno</Link>

      <div style={nav}>
        <button onClick={() => syncBlock(active - 1)} style={navBtn}>← Bloque anterior</button>
        <div style={counter}>Bloque {active + 1} de {lesson.steps.length} · {step.time}<br /><span style={{ color: "#86efac" }}>{syncStatus}</span></div>
        <button onClick={() => syncBlock(active + 1)} style={navBtn}>Bloque siguiente →</button>
      </div>

      <div style={layout}>
        <aside style={panel}>
          <Link href="/ia" style={back}>← Volver al catálogo</Link>
          <h3 style={blue}>GUÍA DEL PROFESOR</h3>

          <Card title="Qué decir" text={step.teacher.say} />
          <Card title="Ejemplo hablado" text={step.teacher.example} />
          <Card title="Pregunta al alumno" text={step.teacher.ask} />
          <Card title="Objetivo pedagógico" text={step.teacher.objective} />
          <Card title="Señal de comprensión" text={step.teacher.signal_ok} success />
          <Card title="Alerta" text={step.teacher.alert} danger />
          <Card title="Intervención" text={step.teacher.intervention} gold />
          <Card title="Evaluación" text={step.teacher.evaluate} />
          <Card title="Cierre" text={step.teacher.close} />
          <Card title="Checklist del profesor" text={step.teacher.checklist} success />
        </aside>

        <section style={center}>
          <header style={hero}>
            <p style={kicker}>NOA Profesor · {lesson.module}</p>
            <h1 style={title}>{lesson.title}</h1>
            <p style={sub}>Producto final: {lesson.product}</p>
          </header>

          <section style={studentPanel}>
            <p style={green}>PANEL ALUMNO · EJECUCIÓN</p>
            <h1 style={blockTitle}>{step.title}</h1>
            <p style={time}>{step.time}</p>

            <div style={box}>
              <strong>Qué hace ahora</strong>
              <p>{step.student}</p>
            </div>

            <div style={promptBox}>
              <strong>Prompt listo</strong>
              <p>{step.prompt}</p>
            </div>

            <div style={expectedBox}>
              <strong>Resultado esperado</strong>
              <p>{step.expected}</p>
            </div>
          </section>
        </section>

        <aside style={panel}>
          <h3 style={{ color: "#facc15" }}>🧠 Experto de clase</h3>
          <p style={{ color: "#cbd5e1" }}>
            Soporte para resolver dudas del profesor según el bloque actual.
          </p>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ej: el alumno no avanza, no entiende el prompt o se queda en blanco..."
            rows={6}
            style={textarea}
          />

          <button onClick={askExpert} style={expertBtn}>
            {loading ? "Consultando..." : "Consultar experto"}
          </button>

          {answer && (
            <div style={answerBox}>
              <strong>Respuesta del experto</strong>
              <p>{answer}</p>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

function Card({ title, text, danger, success, gold }: any) {
  return (
    <div style={card}>
      <strong>{title}</strong>
      <p style={{
        color: danger ? "#fca5a5" : success ? "#86efac" : gold ? "#fde68a" : "#cbd5e1",
        lineHeight: 1.55,
        whiteSpace: "pre-line",
      }}>{text}</p>
    </div>
  );
}

const main = { minHeight: "100vh", background: "linear-gradient(135deg,#020617,#0f172a,#020617)", color: "white", padding: 22 };
const studentLink = { color: "#86efac", fontWeight: 900, textDecoration: "none" };
const nav = { maxWidth: 1580, margin: "14px auto", display: "grid", gridTemplateColumns: "220px 1fr 220px", alignItems: "center", gap: 16 };
const navBtn = { background: "#111827", color: "white", border: "1px solid rgba(148,163,184,.25)", borderRadius: 14, padding: "12px 14px", fontWeight: 900, cursor: "pointer" };
const counter = { textAlign: "center" as const, color: "#93c5fd", fontWeight: 900 };
const layout = { maxWidth: 1580, margin: "0 auto", display: "grid", gridTemplateColumns: "360px 1fr 340px", gap: 22 };
const panel = { background: "rgba(2,6,23,.72)", border: "1px solid rgba(148,163,184,.2)", borderRadius: 28, padding: 22, height: "fit-content" };
const back = { color: "#93c5fd", textDecoration: "none", fontWeight: 900 };
const blue = { color: "#38bdf8", marginTop: 24 };
const center = { display: "grid", gap: 20 };
const hero = { background: "rgba(15,23,42,.8)", border: "1px solid rgba(148,163,184,.2)", borderRadius: 32, padding: 30 };
const kicker = { color: "#7dd3fc", fontWeight: 950 };
const title = { fontSize: 46, margin: "12px 0" };
const sub = { color: "#a7f3d0", fontWeight: 900 };
const studentPanel = { background: "rgba(20,83,45,.28)", border: "1px solid rgba(34,197,94,.34)", borderRadius: 30, padding: 24 };
const green = { color: "#86efac", fontWeight: 950 };
const blockTitle = { fontSize: 42, margin: "8px 0" };
const time = { color: "#5eead4", fontWeight: 900 };
const box = { marginTop: 18, background: "rgba(2,6,23,.42)", border: "1px solid rgba(34,197,94,.28)", borderRadius: 22, padding: 18, fontSize: 18, lineHeight: 1.55 };
const promptBox = { marginTop: 18, background: "rgba(19,78,74,.46)", border: "1px solid rgba(45,212,191,.36)", borderRadius: 24, padding: 20, fontSize: 18, lineHeight: 1.55, whiteSpace: "pre-line" };
const expectedBox = { marginTop: 18, background: "rgba(113,63,18,.25)", border: "1px solid rgba(251,191,36,.3)", borderRadius: 24, padding: 20, fontSize: 18, lineHeight: 1.55 };
const card = { marginTop: 14, background: "rgba(15,23,42,.58)", border: "1px solid rgba(148,163,184,.14)", borderRadius: 18, padding: 14 };
const textarea = { width: "100%", marginTop: 14, background: "#020617", color: "white", border: "1px solid rgba(148,163,184,.25)", borderRadius: 14, padding: 14 };
const expertBtn = { width: "100%", marginTop: 14, background: "linear-gradient(135deg,#7c3aed,#2563eb)", color: "white", border: "none", borderRadius: 14, padding: 14, fontWeight: 900, cursor: "pointer" };
const answerBox = { marginTop: 16, background: "rgba(15,23,42,.8)", border: "1px solid rgba(250,204,21,.25)", borderRadius: 16, padding: 14, color: "#fde68a", lineHeight: 1.55 };
