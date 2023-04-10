import { useEffect, useState } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import data from "../data/productos.json";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {

    const [ product, setProduct ]= useState ({})
    
    const {pid} = useParams()



    const detailProduct = (id) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve ( id ? data.find(prod=>prod.id===id) : data)
            }, 1000);
        })
    }

    useEffect(()=>{
        detailProduct(pid)
        .then((res)=>{
            setProduct(res);
        }) 
    }, [pid])


    return (
        <ItemDetail product={product}/>
    )
}


