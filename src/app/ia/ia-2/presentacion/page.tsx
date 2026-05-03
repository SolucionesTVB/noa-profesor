"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    step: "01",
    title: "Ordenar ideas con IA",
    subtitle: "Convertir desorden en acción",
    doing: "Hoy tomamos pendientes sueltos y los convertimos en una lista clara.",
    use: "Bajar carga mental y decidir qué hacer primero.",
    observe: "No buscamos perfección. Buscamos claridad inicial.",
    example: "Inicio: pagar luz, comprar comida, llamar cliente, ordenar papeles.",
    final: "Lista clara + primer paso definido.",
    teacher: "Si todo está en la cabeza, todo pesa más.",
  },
  {
    step: "02",
    title: "Vaciar la cabeza",
    subtitle: "Ejercicio real",
    doing: "Escriba mínimo 5 pendientes reales.",
    use: "Sin datos, la IA no sirve.",
    observe: "No piense mucho. Solo saque todo.",
    example: "banco, cliente, compras, factura, proveedor.",
    final: "Lista simple (aunque esté desordenada).",
    teacher: "Primero sacar. Luego ordenar.",
  },
  {
    step: "03",
    title: "Simulación IA (inicio)",
    subtitle: "Cómo responde al inicio",
    doing: "Entrada básica → respuesta básica.",
    use: "Ver comportamiento inicial.",
    observe: "Ordena, pero no decide.",
    example: "1. banco, 2. compras, 3. cliente...",
    final: "Todavía no es útil del todo.",
    teacher: "La primera respuesta no es el resultado final.",
  },
  {
    step: "04",
    title: "Mejorar prompt",
    subtitle: "Subir nivel",
    doing: "Pida prioridad y pasos.",
    use: "Convertir en acción.",
    observe: "Aquí cambia el resultado.",
    example: "Separe por prioridad y conviértalo en pasos.",
    final: "Lista con acción.",
    teacher: "El valor está en cómo pide.",
  },
  {
    step: "05",
    title: "Simulación IA (medio)",
    subtitle: "Respuesta mejorada",
    doing: "Comparar antes vs después.",
    use: "Ver evolución.",
    observe: "Ya hay decisión.",
    example: "Alta: banco hoy.",
    final: "Empieza a servir.",
    teacher: "Aquí empieza lo útil.",
  },
  {
    step: "06",
    title: "Errores IA",
    subtitle: "Detectar fallas",
    doing: "Buscar errores.",
    use: "No depender ciegamente.",
    observe: "Errores: largo, genérico, inútil.",
    example: "“Sea productivo” (no sirve).",
    final: "Debe detectar fallas.",
    teacher: "Que suene bien no basta.",
  },
  {
    step: "07",
    title: "Corrección",
    subtitle: "Ajustar",
    doing: "Pedir claridad.",
    use: "Hacer útil.",
    observe: "La IA mejora si usted guía.",
    example: "Hágalo corto y claro.",
    final: "Acción concreta.",
    teacher: "La IA aprende de usted.",
  },
  {
    step: "08",
    title: "Segundo ciclo",
    subtitle: "Caso real",
    doing: "Elija problema real.",
    use: "Aplicarlo en vida.",
    observe: "Uno solo.",
    example: "No me alcanza el tiempo.",
    final: "Problema claro.",
    teacher: "Aquí empieza lo real.",
  },
  {
    step: "09",
    title: "Plan semanal",
    subtitle: "Organizar días",
    doing: "Convertir en plan.",
    use: "Ordenar semana.",
    observe: "Debe ser simple.",
    example: "Lunes pedidos.",
    final: "Semana clara.",
    teacher: "Planificar es decidir.",
  },
  {
    step: "10",
    title: "Simulación IA (final)",
    subtitle: "Resultado correcto",
    doing: "Ver versión final.",
    use: "Comparar evolución.",
    observe: "Claro y usable.",
    example: "Hoy: banco, cliente, compras.",
    final: "Lista lista para usar.",
    teacher: "Esto sí se usa.",
  },
  {
    step: "11",
    title: "Trabajo en clase",
    subtitle: "Aplicación real",
    doing: "Alumnos muestran.",
    use: "Aprender en vivo.",
    observe: "Se mejora en grupo.",
    example: "Profesor corrige.",
    final: "Mejoras reales.",
    teacher: "Aquí se aprende.",
  },
  {
    step: "12",
    title: "Uso real",
    subtitle: "Cierre",
    doing: "Copiar y usar.",
    use: "Aplicar después.",
    observe: "Debe poder hacerlo hoy.",
    example: "Mensaje listo.",
    final: "Acción definida.",
    teacher: "La IA ordena. Usted ejecuta.",
  },
];

export default function Page() {
  const [i, setI] = useState(0);
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const s = slides[i];

  async function askAI() {
    const res = await fetch("/api/profesor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta: q }),
    });
    const data = await res.json();
    setA(data.respuesta || "");
  }

  return (
    <main style={main}>
      <header style={header}>
        <h1 style={topTitle}>Módulo 2 · Clase 2</h1>
        <Link href="/ia/ia-2" style={link}>Profesor →</Link>
      </header>

      <section style={stage}>
        <div style={topRow}>
          <span style={step}>Paso {s.step}</span>
          <span style={counter}>{i+1}/12</span>
        </div>

        <h2 style={title}>{s.title}</h2>
        <p style={subtitle}>{s.subtitle}</p>

        <div style={grid}>
          <div style={left}>
            <Block label="Qué hacemos" text={s.doing} />
            <Block label="Para qué sirve" text={s.use} />
            <Block label="Qué observar" text={s.observe} />
            <Block label="Ejemplo" text={s.example} />
            <Block label="Resultado" text={s.final} />
          </div>

          <div style={right}>
            <div style={teacherBox}>
              “{s.teacher}”
            </div>

            <div style={chat}>
              <textarea
                value={q}
                onChange={(e)=>setQ(e.target.value)}
                placeholder="Duda rápida..."
                style={textarea}
              />
              <button onClick={askAI} style={btnMain}>Preguntar IA</button>
              {a && <p style={answer}>{a}</p>}
            </div>
          </div>
        </div>
      </section>

      <footer style={footer}>
        <button onClick={()=>setI(i-1)} style={btn}>←</button>
        <button onClick={()=>setI(i+1)} style={btnMain}>→</button>
      </footer>
    </main>
  );
}

function Block({label,text}:any){
  return(
    <div style={block}>
      <p style={labelStyle}>{label}</p>
      <p>{text}</p>
    </div>
  )
}

const main={background:"#020617",color:"white",minHeight:"100vh",padding:30};
const header={display:"flex",justifyContent:"space-between"};
const topTitle={fontSize:28};
const link={color:"#a78bfa"};

const stage={maxWidth:1200,margin:"auto"};
const topRow={display:"flex",justifyContent:"space-between"};
const step={color:"#38bdf8"};
const counter={color:"#94a3b8"};

const title={fontSize:40};
const subtitle={color:"#94a3b8"};

const grid={display:"grid",gridTemplateColumns:"2fr 1fr",gap:20};
const left={display:"grid",gap:10};
const right={display:"flex",flexDirection:"column" as const,gap:20};

const block={background:"#0f172a",padding:15,borderRadius:10};
const labelStyle={color:"#86efac"};

const teacherBox={background:"#4c1d95",padding:15,borderRadius:10};

const chat={background:"#1e293b",padding:15,borderRadius:10};
const textarea={width:"100%",marginBottom:10};

const answer={marginTop:10};

const footer={display:"flex",justifyContent:"space-between",marginTop:20};
const btn={background:"#1e293b",padding:10,borderRadius:10};
const btnMain={background:"#7c3aed",padding:10,borderRadius:10};
