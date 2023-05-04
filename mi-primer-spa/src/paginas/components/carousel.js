import React  from "react";
export const Carousel = () => {
    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner principal">
      <div className="carousel-item active">
        <img src="/img/1car.jpg" className="d-block w-100  img-fluid" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="/img/2car.jpg" className="d-block w-100 img-fluid " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="/img/3car.jpg" className="d-block w-100 img-fluid" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    <hr className="featurette-divider"/>
  </div>
    );
}