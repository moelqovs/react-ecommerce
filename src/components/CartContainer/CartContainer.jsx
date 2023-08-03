import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import {CartItem} from "../CartItem/CartItem"
import './cartContainer.css'
import  {addDoc, collection, getFirestore } from "firebase/firestore"


export const CartContainer = () => {
        
        const {cart, totalPrice, clearCart } = useContext (CartContext)
        console.log(cart)



        const handleSubmit = () => {

                const order = { 
                        buyer : {name: 'Marcelo', phone: '31520240', email: 'marcelo@gmail.com'}, 
                items: cart.map(({id,nombre,precio}) => ({id,nombre, precio})),
                total: totalPrice(), 
                }

                const db = getFirestore()
                const ordersCollection = collection(db, 'orders')

                addDoc (ordersCollection, order)
                .then(resp=>console.log(resp.id))
                .catch(error => console.log(error))
                .finally(()=> console.log("completada"))
                clearCart()
                console.log('enviando orden : ', order)
        }


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
                <div className="car-container">
                        <h1  className="title-detail"> Carrito </h1>
                </div>
                < div className="item-cart">
                        { cart.map ( product => < CartItem key={product.id} product = {product} /> ) }
                        <h3> Total Compra: $ {totalPrice()} </h3>
                        <Button onClick={() => clearCart() } variant="outline-danger"> Eliminar Carrito </Button>
                        <Link to='/checkout' onClick={handleSubmit} className="me-auto text-decoration-none text-dark m-lg-4 enlacen"> Finalizar Compra </Link>
                </div>
                </>
        )




}



// { cart.map ( p => <CartItem key={p.id} {...p}/> ) }
// <h3> Total Compra: ${totalPrice} </h3>
//<Button onClick={() => clearCart() } variant="outline-success"> Descartar Carrito </Button>
//<Link to='/checkout' className="me-auto text-decoration-none text-dark m-lg-4 enlacen"> Checkout </Link>
