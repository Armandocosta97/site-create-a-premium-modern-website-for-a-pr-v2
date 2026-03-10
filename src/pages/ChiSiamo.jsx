import { useEffect } from "react"
import AboutHeroSection from "../components/AboutHeroSection"
import PhilosophySection from "../components/PhilosophySection"
import StorySection from "../components/StorySection"

export default function ChiSiamo() {
  useEffect(() => {
    document.title = "Chi siamo | Equilibrio Cinofilo"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conosci l'approccio di Equilibrio Cinofilo: educazione relazionale, ascolto, chiarezza e lavoro pratico per accompagnare cani e persone con rispetto.",
      )
    }
  }, [])

  return (
    <main>
      <AboutHeroSection />

      <StorySection />

      <PhilosophySection />
    </main>
  )
}
