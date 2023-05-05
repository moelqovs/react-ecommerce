import { useEffect, useState } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import"./ItemDetailContainer.css"
import { doc, getDoc, getFirestore } from "firebase/firestore"; 
//import data from "../data/productos.json";


export const ItemDetailContainer = () => {

    const [ product, setProduct ]= useState ({})
    const [loading,setLoading] = useState(true);
    const { pid } = useParams()
    console.log(product)

    useEffect (()=>{
        const db = getFirestore ()
        const queryDoc = doc( db,'productos',pid)
        
        getDoc (queryDoc)
        .then(resp => setProduct ({id: resp.id, ...resp.data() }))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[pid])


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])


    return (
            <>
                {
                    loading ?
                    <h2>Cargando...</h2>
                    :
                    <div className="itemdetailcontainer">
                        <ItemDetail product={product}/>
                    </div>
                }
        </>
    )
}










//    const detailProduct = (id) => {
//        return new Promise ((resolve, reject) => {
//            setTimeout(() => {
//                resolve ( id ? data.find(prod=>prod.id===id) : data)
//            }, 1100);
//        })
//    }


//    useEffect(()=>{
//        detailProduct(pid)
//        .then((res)=>{
//            setProduct(res);
//        }) 
//    }, [pid])