import React  from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
    return ( 
        <div className="container-fluid fixed-bottom ">
        <div className="row bg-secondary p-3 text-white">
          <div class="col-sm-12 col-lg-3 col-md-3">
            <figure>
              <img className="mb-3 text-dark " src="/img/logo1.png" alt="LOGO"/>
            </figure>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-3">
            <p className="h5 mb-3 ">Contactanos</p>
            <Link className="text-white text-decoration-none link-success" to="/">mimichuno@gmail.com</Link>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-3">
            <p className="h5 mb-3">Acerca de</p>
            <div className="mb-2">
              <Link className="text-white text-decoration-none link-success " to="/acerca-de">Acerca de </Link>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-3">
            <p className="h5  mb-3">Redes sociales</p>
            <div className="mb-2">
              <Link className="text-white link-success" to="/"><i className="bi bi-instagram"></i></Link>
            </div>
            <div className="mb-2">
              <Link className="text-white link-success" to="/"><i className="bi bi-facebook"></i></Link>
            </div>
    
          </div>
        </div>
      </div>
    );
}