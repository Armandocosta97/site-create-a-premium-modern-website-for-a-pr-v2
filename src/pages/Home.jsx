import HeroSection from "../components/HeroSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"

export default function Home() {
  return (
    <>
      <HeroSection />

      <SignaturePreviewSection />

      <section id="brand-story-preview">
        <h2>Professione, empatia e lavoro costruito sul quotidiano</h2>
        <p>
          Il percorso educativo non si limita all&apos;esercizio: aiuta le persone
          a leggere meglio il proprio cane, a creare routine piu serene e a
          trovare strumenti utili anche nelle situazioni piu delicate.
        </p>
        <p>
          Se stai cercando un supporto competente e umano, puoi iniziare da un
          primo contatto semplice e senza pressione.
        </p>
        <a href="#/contatti">Richiedi informazioni</a>
      </section>

      <a
        aria-label="Scrivi su WhatsApp a Equilibrio Cinofilo"
        href="https://wa.me/39011000000"
      >
        WhatsApp
      </a>
    </>
  )
}
