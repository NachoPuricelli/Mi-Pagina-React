import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


function Productos() {
  return (
    <>
    <Carousel fade className='text-center bg-dark-subtle mt-4'>
      <Carousel.Item className=''>
        <Image src='https://www.xtrafondos.com/thumbs/webp/1_12852.webp' fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://www.xtrafondos.com/thumbs/webp/1_3341.webp' fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://www.xtrafondos.com/thumbs/webp/1_13029.webp' fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Productos;