const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4.5rem, 9vw, 7rem) 1.5rem 4rem",
    backgroundColor: "#f5efe5",
    color: "#2e312b",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(110deg, rgba(245, 239, 229, 0.97) 0%, rgba(245, 239, 229, 0.92) 38%, rgba(245, 239, 229, 0.62) 68%, rgba(245, 239, 229, 0.26) 100%), url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1600&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gap: "1.5rem",
    width: "min(100%, 44rem)",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#6a7464",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.6rem, 8vw, 4.8rem)",
    lineHeight: 0.97,
    maxWidth: "11ch",
    color: "#22251f",
  },
  description: {
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: 1.75,
    maxWidth: "38rem",
    color: "#4d524a",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.875rem",
  },
  primaryLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.25rem",
    padding: "0.85rem 1.4rem",
    borderRadius: "999px",
    backgroundColor: "#6b7760",
    color: "#f8f4ec",
    textDecoration: "none",
  },
  secondaryLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.25rem",
    padding: "0.85rem 1.4rem",
    borderRadius: "999px",
    border: "1px solid rgba(46, 49, 43, 0.16)",
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    color: "#2e312b",
    textDecoration: "none",
    backdropFilter: "blur(8px)",
  },
  highlights: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    margin: 0,
    padding: 0,
    listStyle: "none",
    color: "#52574f",
    fontSize: "0.95rem",
  },
  highlightItem: {
    padding: "0.45rem 0.8rem",
    borderRadius: "999px",
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    border: "1px solid rgba(46, 49, 43, 0.08)",
  },
}

export default function MenuHeroSection() {
  return (
    <section id="menu-hero" className="hero-section hero-section--inner" aria-labelledby="menu-title" style={styles.section}>
      <div aria-hidden="true" style={styles.background} />

      <div className="hero-section__container" style={styles.container}>
        <p style={styles.eyebrow}>Servizi educativi per cani e persone</p>

        <h1 id="menu-title" style={styles.title}>
          Percorsi chiari, rispettosi e costruiti sulla vita reale
        </h1>

        <p style={styles.description}>
          In questa pagina trovi una panoramica ordinata dei servizi di Equilibrio
          Cinofilo. Ogni proposta nasce dall&apos;osservazione del binomio, dagli
          obiettivi quotidiani e dal bisogno di creare equilibrio nella convivenza,
          senza scorciatoie o promesse irrealistiche.
        </p>

        <div className="hero-section__actions" style={styles.actions}>
          <a className="button-link button-link--primary" href="#/contatti" style={styles.primaryLink}>
            Richiedi informazioni
          </a>
          <a className="button-link button-link--secondary" href="#/chi-siamo" style={styles.secondaryLink}>
            Scopri l&apos;approccio
          </a>
        </div>

        <ul className="hero-section__details hero-section__details--pills" style={styles.highlights}>
          <li className="hero-section__pill" style={styles.highlightItem}>Percorsi individuali e personalizzati</li>
          <li className="hero-section__pill" style={styles.highlightItem}>Supporto pratico nella quotidianita</li>
          <li className="hero-section__pill" style={styles.highlightItem}>Torino e dintorni, anche online se utile</li>
        </ul>
      </div>
    </section>
  )
}
