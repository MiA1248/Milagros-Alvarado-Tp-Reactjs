import React  from "react";
export const Card = ({imagen, titulo, precio}) => {
    return ( 
      <div className="col-sm-12 col-md-3 col-lg-3  ">
        <div className="card h-100 w-50 mx-auto">
          <img src={imagen} className="card-img-top" alt="producto"/>
          <div className="card-body">
            <h5 className="card-title text-center">{titulo}</h5>
            <p className="h2 text-center ">{precio}</p>
          </div>
        </div>
      </div>
    );
}