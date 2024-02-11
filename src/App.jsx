import { BrowserRouter, Router } from "react-router-dom"
import Banner from "./components/Banner"
import BannerSecond from "./components/BannerSecond"
import CardGallery from "./components/CardGallery"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import GalleryCarousel from "./components/GaleryCarousel"
import MapaGoogle from "./components/MapaGoogle"
import NavbarComponent from "./components/NavbarComponent"
import QuienesSomos from "./components/QuienesSomos"
import TextCentral from "./components/TextCentral"

function App() {
  
  return (
    <>
     <NavbarComponent /> 
     <Banner />
     <QuienesSomos />
     <CardGallery />
     <GalleryCarousel />
     <BannerSecond />
     <TextCentral />
     <ContactMe />
     <MapaGoogle />
     <Footer />
    </>
  )
}

export default App
