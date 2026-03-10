import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Gallery from "../components/Gallery"
import MenuPro from "../components/MenuPro"
import Instagram from "../components/Instagram"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Reviews from "../components/Reviews"
import Parallax from "../components/Parallax"
import WhatsAppButton from "../components/WhatsAppButton"

export default function Home(){

  return(

    <main>

      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <MenuPro/>
      <Parallax/>
      <Instagram/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
      <Reviews/>

    </main>

  )

}