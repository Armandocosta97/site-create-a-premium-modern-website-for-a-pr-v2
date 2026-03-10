export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <a href="#/">Home</a>
          <a href="#/menu">Menu</a>
          <a href="#/chi-siamo">Chi siamo</a>
          <a href="#/contatti">Contatti</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© Website</p>
      </footer>
    </>
  )
}
