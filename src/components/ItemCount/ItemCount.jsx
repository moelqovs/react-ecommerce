import { useState } from "react"
import { Button } from "react-bootstrap"
import "./ItemCount.css"



export const ItemCount = ({ initial, stock, onAdd }) => {

    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) { 
            setQuantity (quantity - 1)
        }
    }


    return(
        <div className="counter">
            <div className="controls">
                <h4 className="number text-center"> {quantity} </h4>
                <div className="btn button">
                <Button variant="secondary selector" onClick={decrement}> - </Button>
                <Button variant="secondary selector" onClick={increment}> + </Button>
                </div>
            </div>
            <div>
                <Button variant="outline-success button" onClick={() => onAdd(quantity)} disabled={!stock}> 
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}