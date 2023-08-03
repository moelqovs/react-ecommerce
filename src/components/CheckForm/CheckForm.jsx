import "./checkform.css"
import { Button } from "react-bootstrap";



export const CheckForm = () => {

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log ("Enviado");
  }

  return (
    <div className="form-cont">
      <h1 className="form-tittle"> Contacto </h1>
        <form className="formulario" onSubmit={handleSubmit}>
          < input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Teléfono"/>
          <Button variant="outline-success" type="submit" className="submit-btn"> Enviar </Button>
        </form>
    </div>
  );
}




