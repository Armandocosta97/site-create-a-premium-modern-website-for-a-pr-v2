import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/ChiSiamo"
import Contatti from "./pages/Contatti"

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
