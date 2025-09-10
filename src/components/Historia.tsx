import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Historia() {
  return (
    <>
    <Container fluid className="py-5 bg-gradient">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6} md={12}>
            <img
              src="https://www.xtrafondos.com/thumbs/webp/1_9082.webp"
              alt="Descripción de la imagen"
              className="img-fluid rounded shadow-lg"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </Col>

          <Col lg={6} md={12}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <Card.Title className="display-6 fw-bold text-primary mb-3">
                  Nuestra Historia
                </Card.Title>
                <Card.Text className="fs-5 text-muted mb-4">
                  Descubre la fascinante historia detrás de esta increíble
                  imagen. Cada detalle cuenta una historia única que ha marcado
                  nuestro camino hacia la excelencia y la innovación.
                </Card.Text>
                <Button variant="primary" size="lg" className="px-4 botonGen">
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
   
    <Container fluid className="py-5 bg-gradient">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6} md={12}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <Card.Title className="display-6 fw-bold text-primary mb-3">
                  Actualidad
                </Card.Title>
                <Card.Text className="fs-5 text-muted mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ut illum nam maxime corporis eius natus est a voluptatem pariatur dolor autem porro nostrum, cupiditate dolorem, nemo nisi ab eaque.
                </Card.Text>
                <Button variant="primary" size="lg" className="px-4 botonGen">
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
              
          <Col lg={6} md={12}>
            <img
              src="https://www.blogdelfotografo.com/wp-content/uploads/2015/10/17449816072_212221c28a_b.jpg"
              alt="Descripción de la imagen"
              className="img-fluid rounded shadow-lg"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  </>
  );
}

export default Historia;
