import { PhoneIcon } from "lucide-react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contacto() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card"
          style={{ width: "400px", height: "450px", padding: "20px" }}
        >
          <Card.Title className="text-center mb-4"><PhoneIcon></PhoneIcon>Contáctenos</Card.Title>

          <Form.Floating className="mb-3">
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ingrese su nombre aquí."
            />
            <label htmlFor="nombre">Nombre</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control id="mail" type="email" placeholder="Aquí su mail." />
            <label htmlFor="mail">Email</label>
          </Form.Floating>

          <div className="row mb-3">
            <div className="col-4">
              <Form.Floating>
                <Form.Control
                  id="codarea"
                  type="text"
                  placeholder="011"
                />
                <label htmlFor="codarea">Cód. área</label>
              </Form.Floating>
            </div>
            <div className="col-8">
              <Form.Floating>
                <Form.Control
                  id="celular"
                  type="tel"
                  placeholder="Número de celular"
                />
                <label htmlFor="celular">Número de celular</label>
              </Form.Floating>
            </div>
          </div>
            
          <Form.Floating className="mb-3">
            <Form.Control
              as="textarea"
              id="mensaje"
              placeholder="Escriba su mensaje aquí."
              style={{ height: "100px" }}
            />
            <label htmlFor="mensaje">Mensaje</label>
          </Form.Floating>
        </div>
      </div>
    </>
  );
}

export default Contacto;