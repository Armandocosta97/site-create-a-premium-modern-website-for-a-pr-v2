import MenuHeroSection from "../components/MenuHeroSection"

export default function Menu() {
  return (
    <main>
      <MenuHeroSection />

      <section id="menu-categories" aria-labelledby="menu-categories-title">
        <div>
          <h2 id="menu-categories-title">Aree di lavoro</h2>
          <p>
            La struttura completa dei servizi verra sviluppata nei task dedicati. Per
            ora, questa pagina definisce il contenitore corretto per la futura
            organizzazione dell&apos;offerta.
          </p>
          <div>
            <article>
              <h3>Educazione di base</h3>
              <p>
                Supporto per comunicazione, gestione quotidiana e competenze utili nella
                vita di tutti i giorni.
              </p>
            </article>
            <article>
              <h3>Consulenze comportamentali</h3>
              <p>
                Un primo orientamento per leggere difficolta, contesto e bisogni del cane
                con maggiore chiarezza.
              </p>
            </article>
            <article>
              <h3>Percorsi personalizzati</h3>
              <p>
                Interventi calibrati su eta, storia, ambiente e obiettivi concreti della
                famiglia.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
