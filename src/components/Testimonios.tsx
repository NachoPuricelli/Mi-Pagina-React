import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const StarRating = ({ rating = 5 }: { rating?: number }) => {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span 
        key={i} 
        style={{ 
          color: i <= rating ? '#ffd700' : '#e0e0e0', 
          fontSize: '14px',
          marginRight: '1px'
        }}
      >
        ★
      </span>
    );
  }
  
  return <div>{stars}</div>;
};

function Testimonios() {
  return (
    <>
    <Container className="py-5">
      <header className='fw-bold text-center text-primary card mb-2'>Testimonios</header>
      <Row className="justify-content-center text-center g-4">
        <Col xs={6} sm={6} md={3} lg={3}>
          <Image 
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
            roundedCircle 
            fluid
            style={{ maxWidth: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div className='card mt-1'>
            <div className="p-2">
              <p className="form-text fw-bold text-center mb-1">Steve Johnson (Graphic Designer)</p>
              <StarRating rating={5} />
              <p className='form-text text-muted mb-0'>Excelente servicio. Gracias a su ayuda conseguimos alcanzar nuestra meta</p>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Image 
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
            roundedCircle 
            fluid
            style={{ maxWidth: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div className='card mt-1'>
            <div className="p-2">
              <p className="form-text fw-bold text-center mb-1">Jessica Smith (Big Data Analist)</p>
              <StarRating rating={4} />
              <p className='form-text text-muted mb-0'>Buen servicio. Gracias a su ayuda conseguimos alcanzar nuestra meta</p>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Image 
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
            roundedCircle 
            fluid
            style={{ maxWidth: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div className='card mt-1'>
            <div className="p-2">
              <p className="form-text fw-bold text-center mb-1">Karen Woodstock (Recepcionist)</p>
              <StarRating rating={5} />
              <p className='form-text text-muted mb-0'>Excelente servicio. Gracias a su ayuda conseguimos alcanzar nuestra meta</p>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Image 
            src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg" 
            roundedCircle 
            fluid
            style={{ maxWidth: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div className='card mt-1'>
            <div className="p-2">
              <p className="form-text fw-bold text-center mb-1">Michael Hall (Web Developer)</p>
              <StarRating rating={5} />
              <p className='form-text text-muted mb-0'>Excelente servicio. Gracias a su ayuda conseguimos alcanzar nuestra meta</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
}
<hr />
export default Testimonios;