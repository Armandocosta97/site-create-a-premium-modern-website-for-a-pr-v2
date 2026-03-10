const storyHighlights = [
  "Lettura del comportamento e del contesto prima di ogni proposta operativa.",
  "Indicazioni pratiche pensate per casa, passeggiata e momenti di difficolta reale.",
  "Un percorso costruito insieme, con obiettivi sostenibili e rispettosi dei tempi del cane.",
]

const styles = {
  section: {
    padding: "clamp(4rem, 7vw, 6rem) 1.5rem",
    backgroundColor: "#efe7db",
    color: "#2f312d",
  },
  container: {
    width: "min(100%, 72rem)",
    margin: "0 auto",
    display: "grid",
    gap: "1.75rem",
    alignItems: "center",
  },
  contentGrid: {
    display: "grid",
    gap: "1.5rem",
  },
  textColumn: {
    display: "grid",
    gap: "1rem",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#7d695a",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 3.25rem)",
    lineHeight: 1.05,
    color: "#23251f",
    maxWidth: "12ch",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#4b5047",
    maxWidth: "38rem",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    borderRadius: "1.75rem",
    backgroundColor: "rgba(255, 253, 249, 0.85)",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  panelTitle: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#23251f",
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.75rem",
    color: "#53584f",
    lineHeight: 1.7,
  },
  action: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    minHeight: "3.25rem",
    padding: "0.85rem 1.4rem",
    borderRadius: "999px",
    backgroundColor: "#6a7761",
    color: "#f8f3ea",
    textDecoration: "none",
  },
}

export default function BrandStoryPreviewSection() {
  return (
    <section id="brand-story-preview" style={styles.section}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.contentGrid,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div style={styles.textColumn}>
            <p style={styles.eyebrow}>Chi sono</p>
            <h2 style={styles.title}>
              Un supporto educativo che parte dalla relazione
            </h2>
            <p style={styles.description}>
              Equilibrio Cinofilo nasce per aiutare le persone a comprendere
              meglio il proprio cane e a ritrovare equilibrio nelle situazioni
              di tutti i giorni, con un lavoro chiaro, rispettoso e senza
              scorciatoie.
            </p>
            <p style={styles.description}>
              Ogni percorso mette insieme osservazione, gestione pratica e
              accompagnamento reale, cosi che i cambiamenti possano diventare
              stabili nella vita quotidiana.
            </p>

            <a href="#/chi-siamo" style={styles.action}>
              Conosci il mio approccio
            </a>
          </div>

          <aside style={styles.panel}>
            <h3 style={styles.panelTitle}>Cosa troverai nel percorso</h3>
            <ul style={styles.list}>
              {storyHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
