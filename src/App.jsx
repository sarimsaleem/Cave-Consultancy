import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import OurMission from './components/ourMission/OurMission';
import FAQ from './components/faqs/Faqs';
import TestimonialCarousel from './components/testimonials/Testimonials';

function App() {

  return (
    <>
      <Header />      {/* done */}
      <Carousel />     {/* done */}
      <About />        {/* done */}
      <OurMission /> 
      <Blog />
      <FAQ />
      <TestimonialCarousel />
      <Contact />
      <Footer />
    </>
  )
}

export default App
