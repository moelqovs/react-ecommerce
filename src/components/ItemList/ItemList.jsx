import { Item } from "../Item/Item";
import 'bootstrap/dist/css/bootstrap.min.css';


export const ItemList = ({productos}) => {


    return (
        <>
            {
                productos.length > 0 &&
                
                productos.map((producto)=>{
                
                    return(
                        <div key={producto.id}>
                            <Item producto={producto}/>    
                        </div>
                    )
                })
            }
        </>
    );
}
