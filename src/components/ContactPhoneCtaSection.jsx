const styles = {
  section: {
    padding: "0 1.5rem 4rem",
    backgroundColor: "#fcf8f1",
    color: "#2f312d",
  },
  container: {
    width: "min(100%, 72rem)",
    margin: "0 auto",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "1.75rem",
    borderRadius: "1.75rem",
    backgroundColor: "#f1e6d9",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#7a6b5d",
  },
  title: {
    margin: 0,
    fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
    lineHeight: 1.1,
    color: "#23251f",
    maxWidth: "15ch",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#4b5047",
    maxWidth: "42rem",
  },
  action: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    minHeight: "3.25rem",
    padding: "0.85rem 1.35rem",
    borderRadius: "999px",
    backgroundColor: "#6b7760",
    color: "#f8f4ec",
    textDecoration: "none",
    fontWeight: 600,
  },
}

export default function ContactPhoneCtaSection() {
  return (
    <section className="content-section content-section--compact" style={styles.section} aria-label="Contatto telefonico">
      <div className="content-section__container" style={styles.container}>
        <div className="surface-panel cta-panel" style={styles.panel}>
          <p style={styles.eyebrow}>Telefono</p>
          <h2 style={styles.title}>Parliamone con una chiamata semplice e diretta</h2>
          <p style={styles.description}>
            Se preferisci spiegare a voce la situazione del tuo cane, puoi
            contattarmi telefonicamente per un primo confronto pratico su bisogni,
            priorita e disponibilita.
          </p>
          <a className="button-link button-link--primary" href="tel:+39011000000" style={styles.action}>
            Chiama +39 011 000000
          </a>
        </div>
      </div>
    </section>
  )
}
