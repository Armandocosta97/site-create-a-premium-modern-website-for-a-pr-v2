const principles = [
  {
    title: "Relazione prima della prestazione",
    description:
      "Il lavoro educativo parte dal capire come cane e famiglia stanno insieme, quali segnali si stanno perdendo e quali condizioni possono rendere la convivenza piu serena.",
  },
  {
    title: "Strategie utili nella vita reale",
    description:
      "Ogni indicazione deve poter essere applicata a casa, in passeggiata e nei momenti delicati, con obiettivi leggibili e sostenibili per tutti i membri della famiglia.",
  },
  {
    title: "Progressi costruiti con gradualita",
    description:
      "Non cerco risposte spettacolari o immediate: preferisco accompagnare cambiamenti stabili, rispettosi dei tempi del cane e davvero mantenibili nel tempo.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 6.5rem) 1.5rem",
    backgroundColor: "#efe7db",
    color: "#2f312d",
  },
  container: {
    width: "min(100%, 72rem)",
    margin: "0 auto",
  },
  layout: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    alignItems: "start",
  },
  content: {
    display: "grid",
    gap: "1rem",
    maxWidth: "39rem",
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
    fontSize: "clamp(2rem, 5vw, 3.1rem)",
    lineHeight: 1.05,
    color: "#23251f",
    maxWidth: "12ch",
  },
  lead: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.78,
    color: "#4b5047",
  },
  emphasisBox: {
    marginTop: "0.5rem",
    padding: "1.25rem 1.35rem",
    borderRadius: "1.5rem",
    backgroundColor: "rgba(255, 253, 249, 0.72)",
    border: "1px solid rgba(47, 49, 45, 0.08)",
  },
  emphasisLabel: {
    margin: "0 0 0.5rem",
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#7a695c",
  },
  emphasisText: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#3f453d",
  },
  cards: {
    display: "grid",
    gap: "1rem",
  },
  card: {
    display: "grid",
    gap: "0.75rem",
    padding: "1.4rem",
    borderRadius: "1.5rem",
    backgroundColor: "#fffdf9",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.06)",
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: 1.3,
    color: "#23251f",
  },
  cardDescription: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "#53584f",
  },
}

export default function PhilosophySection() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-title" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.layout}>
          <div style={styles.content}>
            <p style={styles.eyebrow}>Filosofia e metodo</p>
            <h2 id="philosophy-title" style={styles.title}>
              Un approccio rispettoso, leggibile e concreto
            </h2>
            <p style={styles.lead}>
              Lavoro con l&apos;idea che ogni coppia cane-persona abbia bisogni, tempi e obiettivi
              diversi. Per questo non applico protocolli rigidi: preferisco osservare il contesto,
              individuare le priorita e costruire un percorso coerente con la vita quotidiana.
            </p>
            <p style={styles.lead}>
              Il mio compito non e solo intervenire sul comportamento, ma aiutare le persone a
              leggere meglio il proprio cane, gestire con maggiore chiarezza le difficolta e creare
              abitudini piu stabili, serene e sostenibili nel tempo.
            </p>

            <div style={styles.emphasisBox}>
              <p style={styles.emphasisLabel}>Cosa significa, in pratica</p>
              <p style={styles.emphasisText}>
                Ascolto iniziale, obiettivi realistici, indicazioni chiare e un accompagnamento che
                tenga conto sia del benessere del cane sia delle esigenze reali della famiglia.
              </p>
            </div>
          </div>

          <div style={styles.cards}>
            {principles.map((principle) => (
              <article key={principle.title} style={styles.card}>
                <h3 style={styles.cardTitle}>{principle.title}</h3>
                <p style={styles.cardDescription}>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
