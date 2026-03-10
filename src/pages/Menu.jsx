import { useEffect } from "react"
import MenuHeroSection from "../components/MenuHeroSection"
import MenuCategoriesSection from "../components/MenuCategoriesSection"

export default function Menu() {
  useEffect(() => {
    document.title = "Servizi | Equilibrio Cinofilo"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Scopri i servizi di Equilibrio Cinofilo: percorsi per cuccioli, cani adolescenti e adulti, consulenze comportamentali e supporto educativo su misura.",
      )
    }
  }, [])

  return (
    <div className="page-shell page-shell--menu">
      <MenuHeroSection />
      <MenuCategoriesSection />
    </div>
  )
}
