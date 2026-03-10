const previewCards = [
  {
    title: "Percorsi educativi personalizzati",
    description:
      "Ogni proposta parte dall'osservazione del cane, dalle abitudini di casa e dagli obiettivi concreti della famiglia.",
  },
  {
    title: "Strumenti utili per la vita quotidiana",
    description:
      "Lavoriamo su passeggiate, gestione, comunicazione e lettura del comportamento con indicazioni chiare e applicabili.",
  },
  {
    title: "Progressi realistici e rispettosi",
    description:
      "Il focus e sui cambiamenti sostenibili nel tempo, senza scorciatoie, forzature o promesse irrealistiche.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 7vw, 6rem) 1.5rem",
    backgroundColor: "#f8f3ea",
    color: "#2f312d",
  },
  container: {
    width: "min(100%, 72rem)",
    margin: "0 auto",
    display: "grid",
    gap: "2rem",
  },
  intro: {
    display: "grid",
    gap: "1rem",
    maxWidth: "44rem",
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
    lineHeight: 1,
    color: "#23251f",
    maxWidth: "12ch",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#4b5047",
    maxWidth: "40rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    display: "grid",
    gap: "1rem",
    minHeight: "100%",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    backgroundColor: "#fffdf9",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  cardIndex: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "999px",
    backgroundColor: "#e6ded1",
    color: "#5c6455",
    fontSize: "0.9rem",
    fontWeight: 700,
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.25rem",
    lineHeight: 1.3,
    color: "#23251f",
  },
  cardDescription: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "#53584f",
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

export default function SignaturePreviewSection() {
  return (
    <section id="signature-preview" className="content-section" style={styles.section}>
      <div className="content-section__container" style={styles.container}>
        <div className="section-intro" style={styles.intro}>
          <p style={styles.eyebrow}>Come lavoro</p>
          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
          <p style={styles.description}>
            Equilibrio Cinofilo propone un lavoro educativo costruito sulla
            relazione, sul contesto reale e su obiettivi utili nella quotidianita.
          </p>
        </div>

        <div className="cards-grid cards-grid--signature" style={styles.grid}>
          {previewCards.map((card, index) => (
            <article className="cards-grid__item" key={card.title} style={styles.card}>
              <span aria-hidden="true" style={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
            </article>
          ))}
        </div>

        <a className="button-link button-link--primary" href="#/menu" style={styles.action}>
          Scopri i percorsi
        </a>
      </div>
    </section>
  )
}
