import { Card, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartItem = ( {product}) => {


    const { removeItem } = useContext(CartContext) 


    return (
        <div>
            <div>
            <Card style={{ width: '30rem' }}>
                    <Card.Img src={process.env.PUBLIC_URL+product.image} alt={product.id} variant="top" style={{ height: '30rem' }}/>
                        <Card.Body className="card-body">
                        <Card.Title className="text-center"> {product.nombre} </Card.Title>
                        <Card.Text className="text-center"> $ {product.quantity} </Card.Text>
                        <Card.Text className="text-center"> $ {product.precio} </Card.Text>
                    </Card.Body>
            </Card>
            </div>
            <p> Subtotal : $ {product.quantity * product.precio} </p>
            <Button variant="secondary" onClick={ () => removeItem (product.id)}> Eliminar Item </Button>
        </div>
    )
}



//process.env.PUBLIC_URL+