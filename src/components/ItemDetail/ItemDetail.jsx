import"./ItemDetail.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";



export const ItemDetail = ({product}) => {

    return (
        <div>
            <h1  className="title-detail">Detalle del Producto </h1>
            <div>
            <Card style={{ width: '30rem' }}>
                    <Card.Img src={process.env.PUBLIC_URL+product.image} alt={product.id} variant="top" style={{ height: '30rem' }}/>
                        <Card.Body className="card-body">
                            <Card.Title className="text-center"> {product.nombre} </Card.Title>
                            <Card.Text className="text-center"> $ {product.precio} </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    )
}

