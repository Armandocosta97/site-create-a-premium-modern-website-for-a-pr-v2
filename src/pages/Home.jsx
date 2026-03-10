import { useEffect } from "react"
import HeroSection from "../components/HeroSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"

export default function Home() {
  useEffect(() => {
    document.title =
      "Equilibrio Cinofilo | Educazione cinofila moderna e rispettosa"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aiuto concreto per migliorare relazione, gestione quotidiana e benessere del cane con percorsi educativi etici e personalizzati a Torino e dintorni.",
      )
    }
  }, [])

  return (
    <>
      <HeroSection
        primaryCta={{
          href: "#/menu",
          label: "Prenota una consulenza",
        }}
        secondaryCta={{
          href: "#/contatti",
          label: "Contattami",
        }}
      />

      <SignaturePreviewSection />

      <BrandStoryPreviewSection />

      <FloatingWhatsAppButton href="https://wa.me/39011000000" />
    </>
  )
}
