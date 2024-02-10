import Banner from "./components/Banner"
import BannerSecond from "./components/BannerSecond"
import CardGallery from "./components/CardGallery"
import GalleryCarousel from "./components/GaleryCarousel"
import NavbarComponent from "./components/NavbarComponent"
import QuienesSomos from "./components/QuienesSomos"

function App() {
  
  return (
    <>
     <NavbarComponent /> 
     <Banner />
     <QuienesSomos />
     <CardGallery />
     <GalleryCarousel />
     <BannerSecond />
    </>
  )
}

export default App
