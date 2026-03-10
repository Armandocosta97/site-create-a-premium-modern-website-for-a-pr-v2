import HeroSection from "../components/HeroSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"

export default function Home() {
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
