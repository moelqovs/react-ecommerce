import { createContext, useState } from "react";

export const CartContext = createContext([])


export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState ([])
    console.log(cart)


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, { ...item, quantity }]);
        } else {
            setCart(
                cart.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product
                )
            );
        }
    };


    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    
    const totalQuantity = () =>{
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }


    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }


    const clearCart = () => {
        setCart([])
    }


    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    return(
        <CartContext.Provider value={ { 
            isInCart, 
            addItem, 
            removeItem, 
            clearCart, 
            totalPrice, 
            totalQuantity,
            cart
            }}>
            { children }
        </CartContext.Provider>
    )
}







//const addItem = (item, quantity) => {
//    if(!isInCart(item.id)){
//        setCart (cart.map(product => {
//            return product.id === item.id ? 
//            { ...product, quantity: product.quantity + quantity } 
//            : 
//            product
//        }))
//    }else{
//        setCart ([...cart, { ...item, quantity }])
//    }
//}
