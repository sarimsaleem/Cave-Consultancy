import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Footer />
    </>
  )
}

export default App
