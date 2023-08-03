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
                        <Card.Text className="text-center"> Precio unidad : $ {product.precio} </Card.Text>
                    </Card.Body>
            </Card>
            </div>
            <div className="table">
                <h4> Cantidad : {product.quantity} </h4>
                <h4> Subtotal : $ {product.quantity * product.precio} </h4>
                    <div>
                        <Button variant="outline-secondary" onClick={ () => removeItem (product.id, product.quantity)}> Eliminar Item </Button>
                    </div>
            </div>
        </div>
    )
}
