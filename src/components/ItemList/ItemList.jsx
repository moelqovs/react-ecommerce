import { Item } from "../Item/Item";
import "./ItemList.css";


export const ItemList = ({productos}) => {


    return (
        <div>
            {
                productos.length > 0 &&

                productos.map((producto)=>{
                
                    return(
                        <div className="container">
                            <div>
                                <div>
                                    <Item key={producto.id} producto={producto}/> 
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
