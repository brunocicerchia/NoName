"use client"; // This is a client component 👈🏽

//Import Style
import styles from './HeaderComponent.css'
import styles2 from '../globals.css'
import 'animate.css';
import 'hover.css';

//Import Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderComponent = () => {
    return (
      <div>
        <Navbar variant='dark' expand="lg" className='nav'>
          <Container fluid>
            <Navbar.Brand href="#"className='titulo'>noName</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 subTitulo"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#" active>Inicio</Nav.Link>
                <Nav.Link href="#">Servicios</Nav.Link>
                <Nav.Link href="#">Precios</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="primary" className='hvr-grow'>Prueba un mes gratis!</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='header'>
          <Container>
            <Row className="headerContent d-flex align-items-center justify-content-center animate__animated animate__fadeIn">
              <Col className='headerItem subTitulo'><h2>Potencia tu emprendimiento gastronómico con nuestra solución integral para gestionar menús y pedidos online, diseñada especialmente para pequeños negocios!</h2></Col>
              <Col className='headerItem'>2 of 2</Col>
            </Row>
          </Container>  
        </div>
      </div>
    );
  }
  
  export default HeaderComponent;