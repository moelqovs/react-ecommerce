import "./ItemListContainer.css";
import data from "../data/productos.json";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);
    const [loading,setLoading] = useState(true);
    const {cid} = useParams ()


    const pedirProductos = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1100);
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    useEffect (()=>{
        if(cid){
            pedirProductos() 
            .then((respuesta=>setProductos(respuesta.filter(productos=>productos.categoria===cid))));
        }else{
            pedirProductos() 
            .then((respuesta) => {
                setProductos (respuesta);
            })
        } 
    },[cid])

console.log(loading)

    return (
        <>
            (
                {
                    loading ?
                    <h2>Cargando...</h2>
                    :
                    <div className="title-container">
                        <h1> Nuestros Productos </h1>
                        <div className="d-flex flex-wrap flex-row cards-container">
                            <ItemList productos={productos} />
                        </div>
                    </div>
                }
        )
        </>
    );    
}

