import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Menu from "../components/Menu"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import Instagram from "../components/Instagram"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Menu/>
      <Instagram/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </>
  )
}