import { NavLink } from "react-router-dom"

export default function Layout({ children, navigationItems = [] }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
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
      </header>

      <main>{children}</main>

      <footer>
        <p>© Website</p>
      </footer>
    </>
  )
}
