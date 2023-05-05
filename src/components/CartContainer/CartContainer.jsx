import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import {CartItem} from "../CartItem/CartItem"




export const CartContainer = () => {
        console.log(CartContainer)
        
        const {cart, totalPrice, clearCart } = useContext (CartContext)
        console.log(cart)

        if ( cart.length === 0 ){
                return(
                        <div>
                                <h2> No hay items en el carrito </h2>
                                <Link to='/' className="option">
                                        <Button variant="success"> Nuestros Productos </Button>
                                </Link>
                        </div>
                )
        }

        return (
                <>
                        { cart.map ( p => < CartItem key={p.id} p = {p} /> ) }
                        <h3> Total Compra: ${totalPrice} </h3>
                        <Button onClick={() => clearCart() } variant="outline-success"> Descartar Carrito </Button>
                        <Link to='/checkout' className="me-auto text-decoration-none text-dark m-lg-4 enlacen"> Checkout </Link>
                </>
        )
}



// { cart.map ( p => <CartItem key={p.id} {...p}/> ) }
// <h3> Total Compra: ${totalPrice} </h3>
//<Button onClick={() => clearCart() } variant="outline-success"> Descartar Carrito </Button>
//<Link to='/checkout' className="me-auto text-decoration-none text-dark m-lg-4 enlacen"> Checkout </Link>
