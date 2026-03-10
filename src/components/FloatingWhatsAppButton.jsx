const styles = {
  link: {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 50,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.5rem",
    padding: "0.95rem 1.2rem",
    borderRadius: "999px",
    border: "1px solid rgba(47, 49, 45, 0.12)",
    backgroundColor: "#5f7a57",
    color: "#f8f3ea",
    textDecoration: "none",
    boxShadow: "0 18px 30px rgba(39, 50, 35, 0.18)",
    fontSize: "0.98rem",
    fontWeight: 600,
    lineHeight: 1,
  },
}

export default function FloatingWhatsAppButton({
  href = "https://wa.me/39011000000",
  label = "WhatsApp",
}) {
  return (
    <a
      aria-label="Scrivi su WhatsApp a Equilibrio Cinofilo"
      className="floating-whatsapp-button"
      href={href}
      rel="noreferrer"
      style={styles.link}
      target="_blank"
    >
      {label}
    </a>
  )
}
