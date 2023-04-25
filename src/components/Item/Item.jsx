import { Button, Card } from "react-bootstrap";
import  "./Item.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



export const Item = ({producto}) => {

    return (
        <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={process.env.PUBLIC_URL+producto.image} alt={producto.id} variant="top" style={{ height: '20rem' }}/>
                        <Card.Body className="card-body">
                            <Card.Title className="text-center"> {producto.nombre} </Card.Title>
                            <Card.Text className="text-center"> $ {producto.precio} </Card.Text>
                            <hr/>
                            <div className="text-center">
                                    <Link to={`/detail/${producto.id}`}>
                                        <Button variant="outline-secondary"> Detalle Producto </Button>
                                    </Link>
                            </div>
                        </Card.Body>
                    </Card>
        </div>       
    );
}    

