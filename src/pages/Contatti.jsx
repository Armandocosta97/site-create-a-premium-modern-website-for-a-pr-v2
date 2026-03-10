import { useEffect } from "react"
import ContactHeroSection from "../components/ContactHeroSection"
import ContactDetailsSection from "../components/ContactDetailsSection"
import ContactPhoneCtaSection from "../components/ContactPhoneCtaSection"
import ContactWhatsAppCtaSection from "../components/ContactWhatsAppCtaSection"
import OpeningHoursSection from "../components/OpeningHoursSection"

export default function Contatti() {
  useEffect(() => {
    document.title = "Contatti | Equilibrio Cinofilo"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contatta Equilibrio Cinofilo per una consulenza educativa a Torino e dintorni: telefono, email, WhatsApp e disponibilita per iniziare con chiarezza.",
      )
    }
  }, [])

  return (
    <main>
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactPhoneCtaSection />
      <ContactWhatsAppCtaSection />
      <OpeningHoursSection />
    </main>
  )
}
