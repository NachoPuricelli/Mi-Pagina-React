
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Historia from './components/Historia';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Productos from './components/Productos';

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
