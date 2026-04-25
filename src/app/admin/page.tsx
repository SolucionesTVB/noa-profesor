"use client";

import { useState } from "react";

export default function AdminPage() {
  const [studentId, setStudentId] = useState("demo-alumno");
  const [classId, setClassId] = useState("ia-1");
  const [msg, setMsg] = useState("");

  async function unlock() {
    setMsg("Procesando...");

    const res = await fetch("/api/ia/unlock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: studentId,
        class_id: classId,
      }),
    });

    const json = await res.json();

    if (json.ok) {
      setMsg("✅ Clase desbloqueada");
    } else {
      setMsg("❌ Error");
    }
  }

  return (
    <main style={{ padding: 40, background: "#020617", minHeight: "100vh", color: "white" }}>
      <h1>Panel interno</h1>

      <div style={{ marginTop: 20 }}>
        <label>Alumno</label><br />
        <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
          <option value="demo-alumno">Demo Alumno</option>
          <option value="alumno-1">Alumno 1</option>
          <option value="alumno-2">Alumno 2</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Clase</label><br />
        <select value={classId} onChange={(e) => setClassId(e.target.value)}>
          <option value="ia-1">Clase 1</option>
          <option value="ia-2">Clase 2</option>
          <option value="ia-3">Clase 3</option>
          <option value="ia-4">Clase 4</option>
          <option value="ia-5">Clase 5</option>
        </select>
      </div>

      <button onClick={unlock} style={{ marginTop: 20 }}>
        Desbloquear clase
      </button>

      <p style={{ marginTop: 20 }}>{msg}</p>
    </main>
  );
}
