const categories = [
  {
    title: "Educazione quotidiana",
    description:
      "Percorsi dedicati a cani cuccioli, adolescenti o adulti che hanno bisogno di basi piu chiare nella vita di tutti i giorni.",
    details: [
      "Per chi vuole migliorare comunicazione, gestione in casa e collaborazione nelle routine.",
      "Focus su competenze pratiche come attenzione, calma, lettura del contesto e coerenza nelle richieste.",
    ],
  },
  {
    title: "Passeggiata, richiamo e gestione in esterna",
    description:
      "Un lavoro concreto per rendere le uscite piu serene, leggibili e sostenibili sia per il cane sia per la persona.",
    details: [
      "Indicato quando la passeggiata e fonte di tensione, confusione o fatica costante.",
      "Obiettivi centrati su guinzaglio, richiamo, orientamento e capacita di muoversi meglio nell'ambiente.",
    ],
  },
  {
    title: "Consulenze comportamentali e supporto emotivo",
    description:
      "Spazi di osservazione e orientamento per difficolta piu complesse, sempre con un approccio rispettoso e progressivo.",
    details: [
      "Utile in presenza di reattivita, ansia, difficolta di gestione, cambiamenti familiari o fasi delicate.",
      "Il lavoro parte dalla comprensione del quadro generale per costruire passi realistici e ben guidati.",
    ],
  },
  {
    title: "Affiancamento nelle fasi di cambiamento",
    description:
      "Supporto prima e dopo l'adozione, incontri individuali ed eventuali consulenze online quando sono realmente adatte.",
    details: [
      "Pensato per chi desidera prepararsi con maggiore consapevolezza o affrontare una nuova convivenza con piu struttura.",
      "Ogni proposta viene calibrata sul contesto familiare, sull'ambiente e sugli obiettivi davvero utili.",
    ],
  },
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
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    lineHeight: 1.02,
    color: "#23251f",
    maxWidth: "12ch",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#4b5047",
    maxWidth: "41rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
  },
  card: {
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    backgroundColor: "#fffdf9",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
    alignContent: "start",
  },
  index: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "999px",
    backgroundColor: "#e7dfd3",
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
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.7rem",
    color: "#53584f",
    lineHeight: 1.65,
  },
  note: {
    padding: "1.25rem 1.5rem",
    borderRadius: "1.5rem",
    backgroundColor: "#efe7db",
    color: "#454a42",
    lineHeight: 1.7,
    maxWidth: "52rem",
  },
}

export default function MenuCategoriesSection() {
  return (
    <section
      id="menu-categories"
      aria-labelledby="menu-categories-title"
      style={styles.section}
    >
      <div style={styles.container}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>Aree di lavoro</p>
          <h2 id="menu-categories-title" style={styles.title}>
            Una panoramica chiara delle principali tipologie di supporto
          </h2>
          <p style={styles.description}>
            Ogni intervento nasce dall&apos;incontro tra storia del cane, bisogni
            della famiglia e obiettivi concreti. Qui trovi le macro aree su cui
            lavoro piu spesso, per aiutarti a capire da dove si puo iniziare.
          </p>
        </div>

        <div style={styles.grid}>
          {categories.map((category, index) => (
            <article key={category.title} style={styles.card}>
              <span aria-hidden="true" style={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 style={styles.cardTitle}>{category.title}</h3>
              <p style={styles.cardDescription}>{category.description}</p>
              <ul style={styles.list}>
                {category.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p style={styles.note}>
          Se non sai quale area sia piu adatta alla tua situazione, il primo
          confronto serve proprio a fare chiarezza e a definire un percorso
          realistico, rispettoso e sostenibile nel tempo.
        </p>
      </div>
    </section>
  )
}
