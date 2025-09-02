import { Container, Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'



const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-dark-subtle shadow-lg">
      <Container>
        <Navbar.Brand href="#Inico" className="fw-bold text-primary">Nombre de tu Empresa</Navbar.Brand>
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

export default Header
