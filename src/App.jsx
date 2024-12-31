import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import OurMission from './components/ourMission/OurMission';
import FAQ from './components/faqs/Faqs';
import TestimonialCarousel from './components/testimonials/Testimonials';
import Services from './components/services/Services';

function App() {

  return (
    <>
      <Header />     
      <Carousel />    
      <About />       
      <OurMission /> 
      <Services />
      <FAQ />
      <TestimonialCarousel />
      <Contact />
      <Footer />
    </>
  )
}

export default App
