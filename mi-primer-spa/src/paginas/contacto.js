import React  from "react";
import { Navbar} from './components/navbar';
import { Footer } from './components/footer';
 const Contacto = () => {
    return ( 
        <div>
           <Navbar/>
        <h1>Contacto</h1>
      <div className="card">
  <div class="card-body">
        <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre"/>
        </div>
        <div class="form-group">
          <label fhtmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Ingresa tu email"/>
        </div>
        <div class="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="3" placeholder="Ingresa tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      </div>
      </div>
      <Footer/>
      </div>
    );
}
export default Contacto ;