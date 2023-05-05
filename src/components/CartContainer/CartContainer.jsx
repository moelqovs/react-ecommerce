import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import {CartItem} from "../CartItem/CartItem"




export const CartContainer = () => {
        console.log(CartContainer)
        
        const {cart, clearCart, totalQuantity, total } = useContext (CartContext)
        console.log(cart)

        if ( totalQuantity === 0 ){
                return(
                        <div>
                                <h2> No hay items en el carrito </h2>
                                <Link to='/' className="option"> Productos </Link>
                        </div>
                )
        }

        return (
        <div>
                { cart.map ( p => <CartItem key={p.id} {...p}/> ) }
                <h3> Total Compra: ${total} </h3>
                <Button onClick={() => clearCart() } variant="outline-success"> Descartar Carrito </Button>
                <Link to='/checkout' className="me-auto text-decoration-none text-dark m-lg-4 enlacen"> Checkout </Link>
        </div>
        )
}
