import HeroSection from "../components/HeroSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"

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

      <a
        aria-label="Scrivi su WhatsApp a Equilibrio Cinofilo"
        href="https://wa.me/39011000000"
      >
        WhatsApp
      </a>
    </>
  )
}
