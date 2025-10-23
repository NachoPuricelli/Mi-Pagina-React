import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Historia from './components/Historia';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Productos from './components/Productos';

// Importar AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      once: true, // la animación ocurre solo una vez
      offset: 100 // distancia desde el viewport para activar
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Historia></Historia>
      <Productos></Productos>
      <Testimonios></Testimonios>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default App