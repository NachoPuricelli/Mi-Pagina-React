import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar expand="lg" className=" bg-gradient shadow-lg">
        <Container>
          <Navbar.Brand href="#footer" className="fw-bold text-primary mb-0">
            Nombre de tu Empresa
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link id="NavLinkTerm" href="#TermCond" className="ms-2">
              Términos y Condiciones
            </Nav.Link>
            <Nav.Link id="NavLinkRed" href="#RedSocial" className="ms-2 me-2">
              Síganos en Redes Sociales
            </Nav.Link>
            <a href="">
              <img className="me-2" id="iconosFooter" src="/img/icons8-facebook-50.png" />
            </a>
            <a href="">
              <img className="me-2" id="iconosFooter" src="/img/icons8-instagram-48.png" />
            </a>
            <a href="">
              <img className="me-2" id="iconosFooter" src="/img/icons8-whatsapp-50.png" />
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
