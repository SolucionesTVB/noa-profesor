import Link from "next/link";

export default function ContabilidadPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Contabilidad tradicional</h1>

      <p>Curso de contabilidad manual, sin computadora.</p>

      <h2>Clases</h2>

      <ol>
        <li>
          <Link href="/contabilidad/1">Clase 1 — Fundamentos</Link>
        </li>
        <li>
          <Link href="/contabilidad/2">Clase 2 — Partida doble</Link>
        </li>
      </ol>
    </main>
  );
}

