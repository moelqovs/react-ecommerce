import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {addDoc,documentId,getDocs,where,collection,query,getFirestore} from "firebase/firestore";




export const CheckOut = () => {

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(" ");
    const { cart, total, clearCart } = useContext(CartContext);
    const db = getFirestore()
    const createOrder = async ({ name, phone, email }) => {


        setLoading(true);
            try {
                const Order = {
                    buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                total: total,
        };


        const batch = writeBatch(db);
        const outOfStock = [];
        const ids = cart.map((product) => product.id);
        const productsRef = collection (db, "products");
        const productsFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));
        const { docs } = productsFromFirestore;


        docs.forEach((doc) => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;
            const productsAddedToCart = productsAddedToCart?.quantity;
            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }
        });


        if (outOfStock.length === 0) {
            await batch.commit();
            const orderRef = collection(db, "orders");
            const orderAdded = await addDoc(orderRef, Order);
            setOrderId(orderAdded.id);
            clearCart();
        } else {
            console.error("No hay stock disponible");
        }
            } 
            catch (error) {console.log(error);} 
            finally {
                setLoading(false);
            }
    };


    if (loading) {
        return <h1>Se esta generando su orden...</h1>;
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }



    return (
        <div>
            <h1>Checkout</h1>
            <CheckForm onConfirm={createOrder} />
        </div>
        )
}