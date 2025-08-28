
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Historia from './components/Historia';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Header></Header>
      <Historia></Historia>
      <Testimonios></Testimonios>
      <hr />
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default App
