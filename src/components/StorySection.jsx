const storyPillars = [
  {
    title: "Da dove parte il percorso",
    description:
      "Ogni lavoro inizia ascoltando la storia del cane, le abitudini della famiglia e i momenti in cui la convivenza diventa piu faticosa o incerta.",
  },
  {
    title: "Cosa cerco di costruire",
    description:
      "L'obiettivo non e ottenere risposte automatiche, ma aiutare cane e persone a capirsi meglio, con strategie chiare e sostenibili nella vita reale.",
  },
  {
    title: "Come accompagno il cambiamento",
    description:
      "Osservazione, gestione pratica e indicazioni concrete procedono insieme, cosi che ogni progresso possa essere compreso, replicato e mantenuto nel tempo.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 6.5rem) 1.5rem",
    backgroundColor: "#fffdf9",
    color: "#2f312d",
  },
  container: {
    width: "min(100%, 72rem)",
    margin: "0 auto",
    display: "grid",
    gap: "2rem",
  },
  layout: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    alignItems: "start",
  },
  intro: {
    display: "grid",
    gap: "1rem",
    maxWidth: "40rem",
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
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    lineHeight: 1.02,
    color: "#23251f",
    maxWidth: "11ch",
  },
  lead: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.78,
    color: "#4b5047",
    maxWidth: "38rem",
  },
  quote: {
    margin: 0,
    padding: "1.25rem 0 0 1.1rem",
    borderLeft: "2px solid rgba(106, 119, 97, 0.35)",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#3f453d",
    maxWidth: "34rem",
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
    backgroundColor: "#f6f0e7",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.06)",
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.08rem",
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

export default function StorySection() {
  return (
    <section id="story" aria-labelledby="story-title" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.layout}>
          <div style={styles.intro}>
            <p style={styles.eyebrow}>La mia storia</p>
            <h2 id="story-title" style={styles.title}>
              Equilibrio Cinofilo nasce per rendere l&apos;educazione piu chiara e abitabile
            </h2>
            <p style={styles.lead}>
              Ho scelto questo lavoro partendo da una convinzione semplice: quando una famiglia
              incontra difficolta con il proprio cane, ha bisogno di uno spazio competente ma anche
              umano, dove sentirsi ascoltata senza giudizio.
            </p>
            <p style={styles.lead}>
              Per questo il mio approccio unisce lettura del comportamento, attenzione al contesto e
              indicazioni davvero utili nella quotidianita. Mi interessa aiutare le persone a capire
              cosa sta succedendo, non imporre soluzioni rigide o formule uguali per tutti.
            </p>
            <p style={styles.quote}>
              Credo in un percorso educativo che riporti calma, comprensione e strumenti concreti
              dentro la relazione, cosi che i cambiamenti possano diventare stabili e realistici.
            </p>
          </div>

          <div style={styles.cards}>
            {storyPillars.map((pillar) => (
              <article key={pillar.title} style={styles.card}>
                <h3 style={styles.cardTitle}>{pillar.title}</h3>
                <p style={styles.cardDescription}>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
