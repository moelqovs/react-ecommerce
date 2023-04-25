import { useContext, useEffect, useState } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import data from "../data/productos.json";
import { useParams } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"
import"./ItemDetailContainer.css"
import { CartContext } from "../../context/CartContext";


export const ItemDetailContainer = () => {

    const [ product, setProduct ]= useState ({})
    const [quantityAdd, setQuantityAdd ]=useState(0)
    const [loading,setLoading] = useState(true);
    const { addItem } = useContext(CartContext)
    const { pid } = useParams()


    const handleOnAdd = (quantity)=> {
        setQuantityAdd (quantity)
            const item = {
                product
            }
        addItem (item, quantity)
    }


    const detailProduct = (id) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve ( id ? data.find(prod=>prod.id===id) : data)
            }, 1100);
        })
    }


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])


    useEffect(()=>{
        detailProduct(pid)
        .then((res)=>{
            setProduct(res);
        }) 
    }, [pid])


    return (
            <>
            (
                {
                    loading ?
                    <h2>Cargando...</h2>
                    :
                    <div className="itemdetailcontainer">
                        <ItemDetail product={product}/>
                        <aside className="itemcount">
                        {
                            quantityAdd > 0 ? (
                                <Link to='/cart' className="option">
                                    <Button variant="success"> Comprar ahora </Button>
                                </Link>
                            ):(
                                <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                            )
                        }
                        </aside>
                    </div>
                }
            )
        </>
    )
}