
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Historia from './components/Historia';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Productos from './components/Productos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
  });
}, []);


function App() {
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
