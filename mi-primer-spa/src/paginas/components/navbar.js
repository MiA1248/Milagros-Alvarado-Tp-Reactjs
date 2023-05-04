import React  from "react";
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link  to="/"><img src="img/logo1.png" alt="LOGO"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item mx-2 ">
              <Link className="nav-link active text-dark me-5 link-success" to="/">inicio</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark me-5 link-success " to="/" >Producto</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark me-5 link-success "to="/" >Acerca de</Link>
            </li>
            <li className="nav-item mx-2">
            <Link className="nav-link active text-dark me-5 link-success " to="\">Contacto</Link>
            </li>
          </ul>
      </div>
      </div>
    </nav>
      );
}