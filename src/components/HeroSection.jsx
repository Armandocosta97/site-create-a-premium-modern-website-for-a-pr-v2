const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 6rem) 1.5rem",
    backgroundColor: "#f3ede3",
    color: "#2f312d",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(90deg, rgba(243, 237, 227, 0.96) 0%, rgba(243, 237, 227, 0.9) 42%, rgba(243, 237, 227, 0.55) 70%, rgba(243, 237, 227, 0.2) 100%), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    position: "relative",
    zIndex: 1,
    width: "min(100%, 40rem)",
    display: "grid",
    gap: "1.5rem",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#667061",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.75rem, 8vw, 5rem)",
    lineHeight: 0.95,
    maxWidth: "12ch",
    color: "#23251f",
  },
  description: {
    margin: 0,
    maxWidth: "34rem",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#4b5047",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.875rem",
    alignItems: "center",
  },
  primaryLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.25rem",
    padding: "0.85rem 1.4rem",
    borderRadius: "999px",
    backgroundColor: "#6a7761",
    color: "#f8f3ea",
    textDecoration: "none",
  },
  secondaryLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.25rem",
    padding: "0.85rem 1.4rem",
    borderRadius: "999px",
    border: "1px solid rgba(47, 49, 45, 0.18)",
    color: "#2f312d",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    textDecoration: "none",
    backdropFilter: "blur(10px)",
  },
  detailRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    color: "#4b5047",
    fontSize: "0.95rem",
  },
}

const defaultPrimaryCta = {
  href: "#/menu",
  label: "Prenota una consulenza",
}

const defaultSecondaryCta = {
  href: "#/contatti",
  label: "Contattami",
}

export default function HeroSection({
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
}) {
  return (
    <section id="hero" style={styles.section}>
      <div aria-hidden="true" style={styles.background} />

      <div style={styles.container}>
        <p style={styles.eyebrow}>
          Educazione cinofila moderna, pratica e rispettosa
        </p>

        <h1 style={styles.title}>
          Aiuto concreto per costruire una relazione piu serena con il tuo cane
        </h1>

        <p style={styles.description}>
          Equilibrio Cinofilo accompagna cani e persone con percorsi educativi
          chiari, etici e personalizzati, pensati per la vita di tutti i giorni.
        </p>

        <div style={styles.actions}>
          <a href={primaryCta.href} style={styles.primaryLink}>
            {primaryCta.label}
          </a>
          <a href={secondaryCta.href} style={styles.secondaryLink}>
            {secondaryCta.label}
          </a>
        </div>

        <div style={styles.detailRow}>
          <span>Torino e dintorni</span>
          <span>Sessioni individuali e consulenze online</span>
        </div>
      </div>
    </section>
  )
}
