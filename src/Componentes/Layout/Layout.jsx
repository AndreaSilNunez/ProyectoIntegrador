
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="layout">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}