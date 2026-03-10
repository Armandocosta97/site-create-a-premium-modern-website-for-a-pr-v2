const contactCards = [
  {
    title: "Telefono",
    detail: "+39 011 000000",
    description:
      "Per un primo confronto diretto su educazione, gestione quotidiana o difficolta specifiche.",
    href: "tel:+39011000000",
    action: "Chiama Equilibrio Cinofilo",
  },
  {
    title: "Email",
    detail: "ciao@equilibriocinofilo.it",
    description:
      "Utile se preferisci raccontare con calma la vostra situazione e ricevere un primo orientamento.",
    href: "mailto:ciao@equilibriocinofilo.it",
    action: "Scrivi una email",
  },
  {
    title: "WhatsApp",
    detail: "Messaggio diretto",
    description:
      "Un canale pratico per richieste rapide, disponibilita e primi dettagli organizzativi.",
    href: "https://wa.me/39011000000",
    action: "Apri WhatsApp",
  },
]

const serviceHighlights = [
  "Area di servizio: Torino e dintorni",
  "Incontri individuali, a domicilio o in contesti utili al lavoro",
  "Supporto online disponibile quando e davvero adatto al caso",
]

const styles = {
  section: {
    padding: "clamp(4rem, 7vw, 6rem) 1.5rem",
    backgroundColor: "#fcf8f1",
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
    maxWidth: "46rem",
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
    fontSize: "clamp(2rem, 5vw, 3rem)",
    lineHeight: 1.05,
    color: "#23251f",
    maxWidth: "12ch",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#4b5047",
    maxWidth: "42rem",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.45fr) minmax(280px, 0.95fr)",
    gap: "1.25rem",
    alignItems: "start",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    display: "grid",
    gap: "0.85rem",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    backgroundColor: "#fffdf9",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
    alignContent: "start",
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#23251f",
  },
  cardDetail: {
    margin: 0,
    fontSize: "1.15rem",
    lineHeight: 1.4,
    color: "#5f6d55",
    wordBreak: "break-word",
  },
  cardDescription: {
    margin: 0,
    fontSize: "0.96rem",
    lineHeight: 1.7,
    color: "#53584f",
  },
  cardAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    minHeight: "3rem",
    padding: "0.8rem 1.2rem",
    borderRadius: "999px",
    backgroundColor: "#6b7760",
    color: "#f8f4ec",
    textDecoration: "none",
    fontWeight: 600,
  },
  aside: {
    display: "grid",
    gap: "1rem",
    padding: "1.6rem",
    borderRadius: "1.75rem",
    backgroundColor: "#efe7db",
    color: "#383b35",
    alignContent: "start",
  },
  asideLabel: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#7a6b5d",
  },
  asideTitle: {
    margin: 0,
    fontSize: "1.5rem",
    lineHeight: 1.2,
    color: "#23251f",
  },
  asideText: {
    margin: 0,
    lineHeight: 1.75,
    color: "#4b5047",
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.75rem",
    color: "#4b5047",
    lineHeight: 1.65,
  },
}

export default function ContactDetailsSection() {
  return (
    <section
      id="contact-details"
      className="content-section"
      aria-labelledby="contact-details-title"
      style={styles.section}
    >
      <div className="content-section__container" style={styles.container}>
        <div className="section-intro" style={styles.intro}>
          <p style={styles.eyebrow}>Riferimenti</p>
          <h2 id="contact-details-title" style={styles.title}>
            Contatti semplici, chiari e adatti alla vostra situazione
          </h2>
          <p style={styles.description}>
            Puoi scegliere il canale che preferisci per raccontarmi il contesto
            in cui vivete tu e il tuo cane. L&apos;obiettivo del primo scambio e
            capire bisogni, priorita e modalita piu utili per iniziare con
            ordine e serenita.
          </p>
        </div>

        <div className="split-layout split-layout--contact-details" style={styles.layout}>
          <div className="cards-grid cards-grid--contact" style={styles.cardsGrid}>
            {contactCards.map((card) => (
              <article className="cards-grid__item" key={card.title} style={styles.card}>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDetail}>{card.detail}</p>
                <p style={styles.cardDescription}>{card.description}</p>
                <a
                  href={card.href}
                  rel={card.title === "WhatsApp" ? "noreferrer" : undefined}
                  className="button-link button-link--primary"
                  style={styles.cardAction}
                  target={card.title === "WhatsApp" ? "_blank" : undefined}
                >
                  {card.action}
                </a>
              </article>
            ))}
          </div>

          <aside className="surface-panel contact-details__aside" style={styles.aside}>
            <p style={styles.asideLabel}>Area e disponibilita</p>
            <h3 style={styles.asideTitle}>Un supporto costruito sulla vita reale</h3>
            <p style={styles.asideText}>
              Ogni richiesta viene letta partendo dal contesto quotidiano:
              abitudini, ambiente, routine familiari e difficolta concrete. Il
              primo confronto serve a orientare bene il lavoro prima ancora di
              parlare di un percorso.
            </p>
            <ul style={styles.list}>
              {serviceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
