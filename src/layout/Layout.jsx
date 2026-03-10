import { NavLink } from "react-router-dom"

export default function Layout({ children, navigationItems = [] }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Vai al contenuto
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="site-brand" to="/" end>
            <span className="site-brand__name">Equilibrio Cinofilo</span>
            <span className="site-brand__tagline">
              Educazione cinofila moderna e rispettosa
            </span>
          </NavLink>

          <nav aria-label="Main navigation" className="site-nav">
            {navigationItems.map((item) => (
              <NavLink
                key={item.target}
                to={item.target}
                end={item.target === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__name">Equilibrio Cinofilo</p>
            <p className="site-footer__tagline">
              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="site-footer__nav">
            {navigationItems.map((item) => (
              <NavLink
                key={`footer-${item.target}`}
                to={item.target}
                end={item.target === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <address className="site-footer__contact">
            <a href="tel:+39011000000">+39 011 000000</a>
            <a href="mailto:ciao@equilibriocinofilo.it">
              ciao@equilibriocinofilo.it
            </a>
            <span>Torino e dintorni</span>
          </address>

          <p className="site-footer__copyright">
            © Equilibrio Cinofilo
          </p>
        </div>
      </footer>
    </>
  )
}
