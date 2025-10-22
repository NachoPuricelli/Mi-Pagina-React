import { Container, Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
 import { Link, Element } from 'react-scroll';

const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-gradient shadow-lg">
      <Container>
        <Navbar.Brand href="#Inico" className="fw-bolder text-primary NEmpresa">Nombre de tu Empresa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-semibold" >
            <Nav.Link id='NavLink' href="#Inicio">Inicio</Nav.Link>
            <Nav.Link id='NavLink' href="#Historia">Historia</Nav.Link>
            <Nav.Link id='NavLink' href="#Testimonios">Testimonios</Nav.Link>
            <Nav.Link id='NavLink' href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

   <><Element name="seccionHistoria">
  
</Element><Link to="seccionHistoria" smooth={true} duration={500}>
   
  </Link></>




export default Header
