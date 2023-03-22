import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Form,Nav,Button } from "react-bootstrap";
import { CarWidget } from "../CarWidget/CarWidget";
import "./NavBar.css";


export const NavBar = () => {

    return(
        <div className='NavBar'>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="Brand" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Muebles</Nav.Link>
                    <Nav.Link href="#action3">Iluminación</Nav.Link>
                    <Nav.Link href="#action4">Ambientes</Nav.Link>
                    <Nav.Link href="#action5">Contacto</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-warning">
                        <CarWidget/>
                    </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>     
        </div>
    );
}