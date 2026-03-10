const values = [
  "Lettura attenta del cane e del contesto familiare",
  "Indicazioni pratiche applicabili nella quotidianita",
  "Un lavoro rispettoso, progressivo e senza scorciatoie",
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4.5rem, 9vw, 7rem) 1.5rem",
    backgroundColor: "#f6f0e7",
    color: "#2d302a",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(105deg, rgba(246, 240, 231, 0.97) 0%, rgba(246, 240, 231, 0.92) 34%, rgba(246, 240, 231, 0.7) 58%, rgba(246, 240, 231, 0.3) 100%), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    position: "relative",
    zIndex: 1,
    width: "min(100%, 72rem)",
    margin: "0 auto",
    display: "grid",
    gap: "1.75rem",
    alignItems: "start",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },
  content: {
    display: "grid",
    gap: "1.25rem",
    maxWidth: "40rem",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#6b7465",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.5rem, 7vw, 4.7rem)",
    lineHeight: 0.97,
    maxWidth: "11ch",
    color: "#20231d",
  },
  lead: {
    margin: 0,
    fontSize: "1.06rem",
    lineHeight: 1.8,
    color: "#4d5349",
    maxWidth: "38rem",
  },
  meta: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    margin: 0,
    padding: 0,
    listStyle: "none",
    color: "#545a50",
    fontSize: "0.95rem",
  },
  metaItem: {
    padding: "0.5rem 0.9rem",
    borderRadius: "999px",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    border: "1px solid rgba(45, 48, 42, 0.08)",
    backdropFilter: "blur(8px)",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    alignSelf: "end",
    borderRadius: "1.75rem",
    backgroundColor: "rgba(255, 253, 249, 0.84)",
    border: "1px solid rgba(45, 48, 42, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  panelLabel: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#7a695c",
  },
  panelTitle: {
    margin: 0,
    fontSize: "1.5rem",
    lineHeight: 1.2,
    color: "#23261f",
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.8rem",
    color: "#50564c",
    lineHeight: 1.7,
  },
}

export default function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-title"
      style={styles.section}
    >
      <div aria-hidden="true" style={styles.background} />

      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.eyebrow}>Chi sono</p>

          <h1 id="about-hero-title" style={styles.title}>
            Un lavoro educativo che mette al centro relazione, ascolto e vita reale
          </h1>

          <p style={styles.lead}>
            Equilibrio Cinofilo nasce per accompagnare persone e cani con un
            approccio pratico, etico e profondamente umano. Il mio obiettivo e
            aiutare ogni famiglia a costruire maggiore serenita nella quotidianita,
            con indicazioni chiare e sostenibili nel tempo.
          </p>

          <p style={styles.lead}>
            Ogni percorso parte dall&apos;osservazione, dalla comprensione del
            contesto e dal rispetto dei tempi del cane, per trasformare le
            difficolta di tutti i giorni in occasioni di crescita concreta.
          </p>

          <ul style={styles.meta}>
            <li style={styles.metaItem}>Torino e dintorni</li>
            <li style={styles.metaItem}>Percorsi individuali e consulenze mirate</li>
            <li style={styles.metaItem}>Metodo rispettoso e orientato alla relazione</li>
          </ul>
        </div>

        <aside style={styles.panel}>
          <p style={styles.panelLabel}>Cosa guida il mio lavoro</p>
          <h2 style={styles.panelTitle}>Competenza leggibile, supporto concreto</h2>
          <ul style={styles.list}>
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
