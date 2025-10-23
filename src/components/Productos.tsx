import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Productos() {
  return (
    <>
    <header className="fw-bold text-center text-success card mx-auto w-75" data-aos="zoom-in" data-aos-duration="2000">Nuestros Productos</header>
      <Carousel fade className="text-center bg-body-terciary shadow-lg mt-4 w-75 mx-auto rounded" data-aos="zoom-in" data-aos-duration="2000">
        <Carousel.Item className="">
          <Image
            src="https://www.xtrafondos.com/thumbs/webp/1_12852.webp"
            fluid
          />
          <Carousel.Caption>
            <h5>Producto 1</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://www.xtrafondos.com/thumbs/webp/1_3341.webp"
            fluid
          />
          <Carousel.Caption>
            <h5>Producto 2</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://www.xtrafondos.com/thumbs/webp/1_13029.webp"
            fluid
          />
          <Carousel.Caption className=" text-black">
            <h5>Producto 3</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Productos;
