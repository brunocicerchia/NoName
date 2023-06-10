"use client"; // This is a client component 👈🏽
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

//Import Style
import styles from './HeaderComponent.css'
import styles2 from '../globals.css'
import 'animate.css';
import 'hover.css';
import Image from 'next/image';


//Import Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderComponent = () => {
  const { data: session, status} = useSession()
  const router = useRouter()

  const handleClick = (e, path) => {
    if (path === "/dashboard") {
      router.push('/dashboard')
    }
  };

    return (
      <div>
        <Navbar variant='dark' expand="lg" className='nav'>
          <Container fluid className='animate__animated animate__bounceInDown'>
            <Navbar.Brand href="#"className='titulo headerLeft'><u>noName</u></Navbar.Brand>
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
                <a onClick={(e) => handleClick(e, "/dashboard")}><Button variant="warning" className='hvr-grow'>Prueba un mes gratis!</Button></a>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='header'>
          <Container>
            <Row className="headerContent d-flex align-items-center animate__animated animate__fadeIn">
              <Col className='headerItem'>
                <h2 className='headerLeft subTitulo'>Tus pedidos online, todo en un lugar!</h2>
                <h3>Potencia tu emprendimiento gastronómico con nuestra solución integral para gestionar menús y pedidos online, diseñada especialmente para pequeños negocios!</h3>
              </Col>
              <Col className='headerItem texto'>
                <Image className='img-fluid' src="/header.jpg" alt="me" width="800" height="800" />
              </Col>
            </Row>
          </Container>  
        </div>
      </div>
    );
  }
  
  export default HeaderComponent;