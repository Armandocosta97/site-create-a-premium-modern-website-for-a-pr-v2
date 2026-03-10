import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/ChiSiamo"
import Contatti from "./pages/Contatti"

const navigationItems = [
  { label: "Home", target: "/" },
  { label: "Menu", target: "/menu" },
  { label: "Chi siamo", target: "/chi-siamo" },
  { label: "Contatti", target: "/contatti" },
]

const routes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/chi-siamo", element: <ChiSiamo /> },
  { path: "/contatti", element: <Contatti /> },
]

export default function App() {
  return (
    <HashRouter>
      <Layout navigationItems={navigationItems}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </HashRouter>
  )
}
