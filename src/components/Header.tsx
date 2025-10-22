import { Container, Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        className={`bg-gradient shadow-lg sticky-top navbar-smooth ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand 
            href="#Inicio" 
            className="fw-bolder text-primary NEmpresa"
            onClick={(e) => { e.preventDefault(); scrollToSection('Inicio'); }}
          >
            Nombre de tu Empresa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-semibold">
              <Nav.Link 
                id='NavLink' 
                href="#Inicio"
                onClick={(e) => { e.preventDefault(); scrollToSection('Inicio'); }}
              >
                Inicio
              </Nav.Link>
              <Nav.Link 
                id='NavLink' 
                href="#Historia"
                onClick={(e) => { e.preventDefault(); scrollToSection('Historia'); }}
              >
                Historia
              </Nav.Link>
              <Nav.Link 
                id='NavLink' 
                href="#Testimonios"
                onClick={(e) => { e.preventDefault(); scrollToSection('Testimonios'); }}
              >
                Testimonios
              </Nav.Link>
              <Nav.Link 
                id='NavLink' 
                href="#Contacto"
                onClick={(e) => { e.preventDefault(); scrollToSection('Contacto'); }}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>
        .navbar-smooth 
          transition: all 0.3s ease;
        

        .navbar-smooth.scrolled 
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        

        html 
          scroll-behavior: smooth;
        
      </style>
    </>
  );
};

export default Header;