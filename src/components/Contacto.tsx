import { PhoneIcon, MapPinIcon, MailIcon, ClockIcon } from "lucide-react";
import { useState } from "react";
import { Card, Container, Row, Col, Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    cod_area: "",
    celular: "",
    asunto: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  // Manejar cambios en los inputs
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Limpiar formulario
  const handleLimpiar = () => {
    setFormData({
      nombre: "",
      email: "",
      cod_area: "",
      celular: "",
      asunto: "",
      mensaje: "",
    });
    setMensaje({ tipo: "", texto: "" });
  };

  // Enviar formulario
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMensaje({ tipo: "", texto: "" });

    try {
      const response = await fetch('http://localhost:5000/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje({ 
          tipo: "success", 
          texto: "✅ ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto." 
        });
        handleLimpiar();
      } else {
        setMensaje({ 
          tipo: "danger", 
          texto: `❌ Error: ${data.error || 'No se pudo enviar el mensaje'}` 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje({ 
        tipo: "danger", 
        texto: "❌ Error de conexión. Por favor, verifica que el servidor esté activo." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Sección Hero de Contacto */}
      <Container>
        <Container>
          <Row className="text-center text-primary">
            <Col>
              <h1 className="display-4 fw-bold mb-3">
                <PhoneIcon className="me-3" size={48} />
                Contáctanos
              </h1>
              <p className="lead fs-5 text-primary">
                Estamos aquí para ayudarte. Hablemos de tu próximo proyecto.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="py-5">
        <Row className="g-5">
          {/* Información de contacto */}
          <Col lg={4} md={12}>
            <div className="h-100">
              <h3 className="fw-bold text-primary mb-4">Información de Contacto</h3>
              
              {/* Tarjetas de contacto */}
              <Card className="mb-3 border-0 shadow-sm glass">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded-circle me-3" style={{
                      backgroundColor: 'rgba(37, 99, 235, 0.1)'
                    }}>
                      <MailIcon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">contacto@tuempresa.com</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mb-3 border-0 shadow-sm glass">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded-circle me-3" style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)'
                    }}>
                      <PhoneIcon size={24} style={{ color: '#10b981' }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Teléfono</h6>
                      <p className="text-muted mb-0">+54 11 1234-5678</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mb-3 border-0 shadow-sm glass">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded-circle me-3" style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)'
                    }}>
                      <MapPinIcon size={24} style={{ color: '#ef4444' }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Dirección</h6>
                      <p className="text-muted mb-0">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mb-4 border-0 shadow-sm glass">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded-circle me-3" style={{
                      backgroundColor: 'rgba(147, 51, 234, 0.1)'
                    }}>
                      <ClockIcon size={24} style={{ color: '#9333ea' }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Horarios</h6>
                      <p className="text-muted mb-0">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Estadísticas rápidas */}
              <div className="p-4 rounded-3" style={{
                background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
              }}>
                <Row className="text-center">
                  <Col xs={4}>
                    <h4 className="fw-bold text-primary mb-1">5★</h4>
                    <small className="text-muted">Rating</small>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          {/* Formulario de contacto */}
          <Col lg={8} md={12}>
            <Card className="border-0 shadow-lg glass h-100">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-primary mb-2">Envíanos un Mensaje</h3>
                  <p className="text-muted">Completa el formulario y nos pondremos en contacto contigo</p>
                </div>

                {/* Mensajes de éxito/error */}
                {mensaje.texto && (
                  <Alert variant={mensaje.tipo} className="mb-4" dismissible onClose={() => setMensaje({ tipo: "", texto: "" })}>
                    {mensaje.texto}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Floating className="mb-4">
                        <Form.Control
                          id="nombre"
                          type="text"
                          placeholder="Ingrese su nombre aquí"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            background: 'rgba(255, 255, 255, 0.9)'
                          }}
                        />
                        <label htmlFor="nombre" className="text-muted">Nombre completo *</label>
                      </Form.Floating>
                    </Col>

                    <Col md={6}>
                      <Form.Floating className="mb-4">
                        <Form.Control 
                          id="email" 
                          type="email" 
                          placeholder="Aquí su email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            background: 'rgba(255, 255, 255, 0.9)'
                          }}
                        />
                        <label htmlFor="email" className="text-muted">Email *</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col md={4}>
                      <Form.Floating>
                        <Form.Control 
                          id="cod_area" 
                          type="text" 
                          placeholder="011"
                          value={formData.cod_area}
                          onChange={handleChange}
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            background: 'rgba(255, 255, 255, 0.9)'
                          }}
                        />
                        <label htmlFor="cod_area" className="text-muted">Cód. área</label>
                      </Form.Floating>
                    </Col>
                    <Col md={8}>
                      <Form.Floating>
                        <Form.Control
                          id="celular"
                          type="tel"
                          placeholder="Número de celular"
                          value={formData.celular}
                          onChange={handleChange}
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            background: 'rgba(255, 255, 255, 0.9)'
                          }}
                        />
                        <label htmlFor="celular" className="text-muted">Número de celular</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Form.Floating className="mb-4">
                    <Form.Select 
                      id="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      style={{
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        background: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta general</option>
                      <option value="cotizacion">Solicitar cotización</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="otro">Otro</option>
                    </Form.Select>
                    <label htmlFor="asunto" className="text-muted">Asunto</label>
                  </Form.Floating>

                  <Form.Floating className="mb-4">
                    <Form.Control
                      as="textarea"
                      id="mensaje"
                      placeholder="Escriba su mensaje aquí"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      style={{ 
                        height: "120px",
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        background: 'rgba(255, 255, 255, 0.9)',
                        resize: 'vertical'
                      }}
                    />
                    <label htmlFor="mensaje" className="text-muted">Mensaje *</label>
                  </Form.Floating>

                  {/* Botones */}
                  <div className="d-flex gap-3">
                    <Button 
                      type="submit"
                      variant="primary" 
                      size="lg" 
                      disabled={loading}
                      className="flex-grow-1 d-flex align-items-center justify-content-center botonHover"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '0.75rem 2rem',
                        fontWeight: '600'
                      }}
                    >
                      <MailIcon size={20} className="me-2" />
                      {loading ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                    
                    <Button 
                      type="button"
                      onClick={handleLimpiar}
                      className="botonHover"
                      variant="outline-secondary" 
                      size="lg"
                      disabled={loading}
                      style={{
                        borderRadius: '12px',
                        padding: '0.75rem 2rem',
                        fontWeight: '600'
                      }}
                    >
                      Limpiar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección adicional: Por qué elegirnos */}
        <Row className="mt-5 pt-5">
          <Col>
            <div className="text-center mb-5">
              <h3 className="fw-bold text-primary mb-3">¿Por qué elegirnos?</h3>
              <p className="text-muted fs-5">Estas son las razones por las que nuestros clientes nos prefieren</p>
            </div>
            
            <Row className="g-4">
              <Col md={4}>
                <div className="text-center p-4">
                  <div className="p-4 rounded-circle d-inline-flex mb-3" style={{
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    width: '80px',
                    height: '80px'
                  }}>
                    <PhoneIcon size={32} className="text-primary m-auto" />
                  </div>
                  <h5 className="fw-bold mb-2">Respuesta Rápida</h5>
                  <p className="text-muted">Respondemos todas las consultas en menos de 24 horas</p>
                </div>
              </Col>
              
              <Col md={4}>
                <div className="text-center p-4">
                  <div className="p-4 rounded-circle d-inline-flex mb-3" style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    width: '80px',
                    height: '80px'
                  }}>
                    <ClockIcon size={32} style={{ color: '#10b981' }} className="m-auto" />
                  </div>
                  <h5 className="fw-bold mb-2">Disponibilidad</h5>
                  <p className="text-muted">Soporte técnico disponible de lunes a viernes</p>
                </div>
              </Col>
              
              <Col md={4}>
                <div className="text-center p-4">
                  <div className="p-4 rounded-circle d-inline-flex mb-3" style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    width: '80px',
                    height: '80px'
                  }}>
                    <MailIcon size={32} style={{ color: '#ef4444' }} className="m-auto" />
                  </div>
                  <h5 className="fw-bold mb-2">Comunicación</h5>
                  <p className="text-muted">Mantenemos informados a nuestros clientes en cada paso</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contacto;