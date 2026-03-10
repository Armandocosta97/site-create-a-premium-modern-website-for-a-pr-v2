const availabilityWindows = [
  {
    label: "Lunedi - Venerdi",
    value: "9:00 - 19:00",
    note: "Consulenze, sessioni individuali e risposte ai nuovi contatti.",
  },
  {
    label: "Sabato",
    value: "9:00 - 13:00",
    note: "Disponibilita dedicata a incontri programmati e uscite educative.",
  },
  {
    label: "Domenica",
    value: "Su richiesta",
    note: "Valutata solo per situazioni specifiche o necessita organizzative.",
  },
]

const processSteps = [
  "Risposta ai messaggi entro 24 ore lavorative.",
  "Gli incontri vengono fissati in base alla zona, al contesto e al bisogno reale.",
  "Per urgenze organizzative puoi indicarlo nel messaggio WhatsApp o nella email.",
]

const styles = {
  section: {
    padding: "clamp(4rem, 7vw, 6rem) 1.5rem 5rem",
    backgroundColor: "#f6f0e6",
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
    fontSize: "clamp(2rem, 5vw, 3rem)",
    lineHeight: 1.05,
    color: "#23251f",
    maxWidth: "13ch",
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
    gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, 0.85fr)",
    gap: "1.25rem",
    alignItems: "start",
  },
  scheduleCard: {
    display: "grid",
    gap: "1rem",
    padding: "1.6rem",
    borderRadius: "1.75rem",
    backgroundColor: "#fffdf9",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  scheduleList: {
    display: "grid",
    gap: "0.9rem",
  },
  row: {
    display: "grid",
    gap: "0.35rem",
    paddingBottom: "0.9rem",
    borderBottom: "1px solid rgba(47, 49, 45, 0.08)",
  },
  rowLabel: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 700,
    color: "#23251f",
  },
  rowValue: {
    margin: 0,
    fontSize: "1.2rem",
    lineHeight: 1.4,
    color: "#5f6d55",
  },
  rowNote: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.65,
    color: "#53584f",
  },
  aside: {
    display: "grid",
    gap: "1rem",
    padding: "1.6rem",
    borderRadius: "1.75rem",
    backgroundColor: "#e9dfd2",
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
    fontSize: "1.45rem",
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

export default function OpeningHoursSection() {
  return (
    <section
      id="opening-hours"
      aria-labelledby="opening-hours-title"
      style={styles.section}
    >
      <div style={styles.container}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>Disponibilita</p>
          <h2 id="opening-hours-title" style={styles.title}>
            Orari chiari per organizzare il primo passo con calma
          </h2>
          <p style={styles.description}>
            Gli orari indicano le finestre in cui ricevo piu facilmente nuove
            richieste e organizzo le consulenze. Se la tua situazione richiede
            un confronto in una fascia diversa, possiamo valutarlo insieme in
            base al contesto e all&apos;area di intervento.
          </p>
        </div>

        <div style={styles.layout}>
          <div style={styles.scheduleCard}>
            <div style={styles.scheduleList}>
              {availabilityWindows.map((slot, index) => (
                <div
                  key={slot.label}
                  style={{
                    ...styles.row,
                    borderBottom:
                      index === availabilityWindows.length - 1
                        ? "none"
                        : styles.row.borderBottom,
                    paddingBottom:
                      index === availabilityWindows.length - 1 ? 0 : "0.9rem",
                  }}
                >
                  <p style={styles.rowLabel}>{slot.label}</p>
                  <p style={styles.rowValue}>{slot.value}</p>
                  <p style={styles.rowNote}>{slot.note}</p>
                </div>
              ))}
            </div>
          </div>

          <aside style={styles.aside}>
            <p style={styles.asideLabel}>Come funziona</p>
            <h3 style={styles.asideTitle}>Tempi di risposta e organizzazione</h3>
            <p style={styles.asideText}>
              Dopo il primo contatto definisco con te il formato piu adatto:
              telefonata conoscitiva, incontro a domicilio o consulenza online
              quando ha davvero senso per il lavoro da fare.
            </p>
            <ul style={styles.list}>
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
