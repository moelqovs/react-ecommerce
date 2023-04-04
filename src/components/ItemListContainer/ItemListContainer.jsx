import "./ItemListContainer.css";
import data from "../data/productos.json";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";




export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);

    const pedirProductos = () => {
        return new Promise ((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect (()=>{
        pedirProductos() 
        .then((respuesta) => {
            setProductos (respuesta);
        })
    },[])


    return (
        <div>
            <h1> Nuestros Productos </h1>
            <ItemList productos={productos}/>
        </div>
    );    
}

