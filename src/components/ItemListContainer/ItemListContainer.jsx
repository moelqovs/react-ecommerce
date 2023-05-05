import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
//import data from "../data/productos.json";


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);
    const [loading,setLoading] = useState(true);
    const {cid} = useParams ();



    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    

    useEffect (()=>{
        const db = getFirestore ()
        const queryCollection = collection(db, 'productos')
        
        if(cid){
            const queryFilter = query ( queryCollection, where('categoria','==',cid))

            getDocs(queryFilter)
            .then(resp=>setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }else{
            getDocs(queryCollection)
            .then(resp=>setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))    
        }         
    },[cid]) 




    return (
        <>
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
        </>
    );    
}










//   const pedirProductos = () => {
 //       return new Promise ((resolve, reject) => {
 //           setTimeout(() => {
 //               resolve(data)
 //           }, 1100);
 //       })
 //   }


//useEffect (()=>{
    //    if(cid){
    //        pedirProductos() 
    //        .then((respuesta=>setProductos(respuesta.filter(productos=>productos.categoria===cid))));
    //    }else{
    //        pedirProductos() 
    //        .then((respuesta) => {
    //            setProductos (respuesta);
    //        })
    //    } 
    //},[cid])