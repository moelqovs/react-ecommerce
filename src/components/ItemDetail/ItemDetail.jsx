import"./ItemDetail.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({product}) => {

    const [quantityAdd, setQuantityAdd ]=useState(0)
    const { addItem } = useContext(CartContext)

    console.log(quantityAdd,addItem)

    
    const handleOnAdd = (quantity)=> {
        setQuantityAdd  (quantity)
        addItem (product, quantity)
    }



    return (
        <div className="itle-detail">
            <h1  className="title-detail">Detalle del Producto </h1>
            <section className="item-detail">
            <div> 
            <Card style={{ width: '30rem' }}>
                    <Card.Img src={process.env.PUBLIC_URL+product.image} alt={product.id} variant="top" style={{ height: '30rem' }}/>
                        <Card.Body className="card-body">
                            <Card.Title className="text-center"> {product.nombre} </Card.Title>
                            <Card.Text className="text-center"> $ {product.precio} </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
            <>
                {
                    quantityAdd > 0 ? (
                        <Link to='/cart' className="option">
                            <Button variant="success"> Comprar ahora </Button>
                        </Link>
                    ):(
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                    )
                }
            </>
            </section>
        </div>
    )
}

