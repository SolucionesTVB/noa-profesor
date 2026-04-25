import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>NOA Profesor</h1>

      <p>Sistema de clases asistidas</p>

      <h2>Cursos</h2>

      <ul>
        <li>
          <Link href="/contabilidad">
            Contabilidad tradicional
          </Link>
        </li>

        <li>
          <Link href="/ia">
            Inteligencia Artificial práctica
          </Link>
        </li>
      </ul>
    </main>
  );
}

