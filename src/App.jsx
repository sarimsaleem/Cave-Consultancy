import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Blog from './components/detail/Detail';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
