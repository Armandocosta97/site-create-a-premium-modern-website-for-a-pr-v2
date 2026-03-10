const contactMethods = [
  "Torino e dintorni",
  "Primo confronto telefonico o via email",
  "Consulenze in presenza e supporto online se utile",
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4.5rem, 9vw, 7rem) 1.5rem 4rem",
    backgroundColor: "#f4ede3",
    color: "#2d302a",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(108deg, rgba(244, 237, 227, 0.97) 0%, rgba(244, 237, 227, 0.92) 36%, rgba(244, 237, 227, 0.62) 68%, rgba(244, 237, 227, 0.28) 100%), url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    position: "relative",
    zIndex: 1,
    width: "min(100%, 72rem)",
    margin: "0 auto",
    display: "grid",
    gap: "1.5rem",
    alignItems: "end",
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
    color: "#697361",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.5rem, 7vw, 4.8rem)",
    lineHeight: 0.97,
    maxWidth: "11ch",
    color: "#21241e",
  },
  lead: {
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#4b5148",
    maxWidth: "37rem",
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
    border: "1px solid rgba(45, 48, 42, 0.16)",
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    color: "#2d302a",
    textDecoration: "none",
    backdropFilter: "blur(8px)",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    borderRadius: "1.75rem",
    backgroundColor: "rgba(255, 252, 246, 0.84)",
    border: "1px solid rgba(45, 48, 42, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  panelLabel: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#7a6b5d",
  },
  panelTitle: {
    margin: 0,
    fontSize: "1.45rem",
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

export default function ContactHeroSection() {
  return (
    <section
      id="contact-hero"
      className="hero-section hero-section--inner"
      aria-labelledby="contact-hero-title"
      style={styles.section}
    >
      <div aria-hidden="true" style={styles.background} />

      <div className="hero-section__container hero-section__container--split" style={styles.container}>
        <div style={styles.content}>
          <p style={styles.eyebrow}>Contatti</p>

          <h1 id="contact-hero-title" style={styles.title}>
            Un primo contatto chiaro per capire da dove iniziare
          </h1>

          <p style={styles.lead}>
            Se vuoi confrontarti su educazione, gestione quotidiana o difficolta
            specifiche, puoi scrivermi o chiamarmi per raccontarmi la vostra
            situazione. Ogni richiesta viene accolta con attenzione, senza fretta
            e senza formule standard.
          </p>

          <p style={styles.lead}>
            Il primo passo serve a raccogliere le informazioni essenziali,
            comprendere i bisogni del cane e capire quale tipo di supporto possa
            essere davvero utile per la vostra realta.
          </p>

          <div className="hero-section__actions" style={styles.actions}>
            <a className="button-link button-link--primary" href="tel:+39011000000" style={styles.primaryLink}>
              Chiama ora
            </a>
            <a
              className="button-link button-link--secondary"
              href="mailto:ciao@equilibriocinofilo.it"
              style={styles.secondaryLink}
            >
              Scrivi una email
            </a>
          </div>
        </div>

        <aside className="surface-panel" style={styles.panel}>
          <p style={styles.panelLabel}>Come posso aiutarti</p>
          <h2 style={styles.panelTitle}>Un confronto orientato alla quotidianita</h2>
          <ul style={styles.list}>
            {contactMethods.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
