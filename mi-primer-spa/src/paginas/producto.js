import React  from "react";
import {  Card } from "./components/card";
import { Navbar} from './components/navbar';
import { Footer } from './components/footer';
const Producto = () => {
    return ( 
      <div>
    <Navbar/>
        <h1>productos</h1>
        <div className="container-fluid row">
      <Card imagen={'/img/producto1.jpg'} titulo={'Exelent Adulto'} precio={'10.000$'} />
      <Card imagen={'/img/producto2.jpg'} titulo={'Exelent Gatito'} precio={'10.000$'} />
      <Card imagen={'/img/producto3.jpeg'} titulo={'Juego Pluma'} precio={'5.000$'} />
      <Card imagen={'/img/producto4.jpeg'} titulo={'Tunel Gato'} precio={'13.000$'} />
    </div>
    <Footer/>
    </div>
    );
}
export default Producto