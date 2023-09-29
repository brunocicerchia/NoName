'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ContentLoader from 'react-content-loader'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Dashboard() {
    const { data: session, status} = useSession()
    const router = useRouter()
    //console.log(session, status)

    if(status === 'loading') {
        return(
            <ContentLoader
                speed={2}
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="#d9d9d9"
                foregroundColor="#ededed"
                >
                <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
                <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
                <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
            </ContentLoader>
        )
    }

    if(status === 'unauthenticated') {
        router.push('/')
    } else {
        return(
            <div>
                <Navbar variant='dark' expand="lg" className='nav'>
                    <Container fluid className='animate__animated animate__bounceInDown'>
                        <Navbar.Brand href="#"className='titulo headerLeft'><u>Bienvenido</u></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 subTitulo"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#" active>Inicio</Nav.Link>
                            <Nav.Link href="#">Mis productos</Nav.Link>
                            <Nav.Link href="#">Configuracion</Nav.Link>
                            <Nav.Link href="#">Estadisticas</Nav.Link>
                            <Nav.Link href="#">Mi membresia</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Image src={session.user.image} width={50} height={50} roundedCircle/>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {session.user.name}
            </div>
        )
    }

    return (
            <div>
                
            </div>
    )
}

export default Dashboard