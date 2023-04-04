import { Button, Card } from "react-bootstrap";
import  "./Item.css";




export const Item = ({producto}) => {

    return (
        <div className="card-container">
        <Card style={{ width: '18rem' }}>
            <Card.Img src={process.env.PUBLIC_URL+producto.image} alt={producto.id} variant="top" />
                <Card.Body className="card-body">
                    <Card.Title> {producto.nombre} </Card.Title>
                    <Card.Text> $ {producto.precio} </Card.Text>
                    <Button variant="outline-warning">Agregar</Button>
                </Card.Body>
            </Card>
        </div>       
    );
}    



 //<div className="card" key={producto.id}>
 //           <img src={producto.image} alt= {producto.nombre}/>
//            <div className="card-body">
//                <h4 className="card-title"> {producto.nombre} </h4>
 //               <p className="card-text"> $ {producto.precio} </p>
 //               <Button variant="outline-warning">Agregar</Button>
 //           </div>
 //       </div>             