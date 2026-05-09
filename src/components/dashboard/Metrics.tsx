export default function Metrics() {
  return (
    <section style={metrics}>
      <div style={metricCard}>
        <strong>4</strong>
        <span>Clases</span>
      </div>

      <div style={metricCard}>
        <strong>2h</strong>
        <span>Duración por clase</span>
      </div>

      <div style={metricCard}>
        <strong>Live</strong>
        <span>Profesor + alumno sincronizados</span>
      </div>
    </section>
  );
}

const metrics = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 18,
  marginBottom: 28,
};

const metricCard = {
  background: "rgba(15,23,42,.78)",
  border: "1px solid rgba(148,163,184,.16)",
  borderRadius: 24,
  padding: 24,
  display: "grid",
  gap: 8,
  color: "white",
};
