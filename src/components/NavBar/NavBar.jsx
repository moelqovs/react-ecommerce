import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Form,Nav,Button } from "react-bootstrap";
import { CarWidget } from "../CarWidget/CarWidget";
import "./NavBar.css";
import { Link } from 'react-router-dom';


export const NavBar = () => {

    return(
        <div className='NavBar'>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="Brand" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className=" text-center d-flex align-items-center me-auto center contenedor-nav"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Link to='/' className='me-auto text-decoration-none text-light m-lg-4 enlace'> Home </Link>
                    <Link to='/categoria/camas' className='me-auto text-decoration-none text-light m-lg-4 enlace'>Camas</Link>
                    <Link to='/categoria/sofas' className='me-auto text-decoration-none text-light m-lg-4 enlace'>Sofás</Link>
                    <Link to='/categoria/comedor' className='me-auto text-decoration-none text-light m-lg-4 enlace'>Comedor</Link>
                    <Link to='/categoria/decoracion' className='me-auto text-decoration-none text-light m-lg-4 enlace'>Decoración</Link>
                </Nav>
                <Link to='/cart'>
                    <Form className="d-flex">
                        <Button variant="outline-success">
                            <CarWidget/>
                        </Button>
                    </Form>
                </Link>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>     
        </div>
    );
}