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
    backgroundColor: "#e8efe2",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#5f6d55",
  },
  title: {
    margin: 0,
    fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
    lineHeight: 1.1,
    color: "#23251f",
    maxWidth: "16ch",
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

export default function ContactWhatsAppCtaSection() {
  return (
    <section style={styles.section} aria-label="Contatto WhatsApp">
      <div style={styles.container}>
        <div style={styles.panel}>
          <p style={styles.eyebrow}>WhatsApp</p>
          <h2 style={styles.title}>Scrivimi su WhatsApp per un primo confronto rapido</h2>
          <p style={styles.description}>
            Se preferisci un contatto immediato per disponibilita, zona di
            intervento o prime informazioni pratiche, puoi inviare un messaggio
            diretto e ricevere una risposta orientativa con chiarezza.
          </p>
          <a
            href="https://wa.me/39011000000"
            target="_blank"
            rel="noreferrer"
            style={styles.action}
          >
            Scrivi su WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
