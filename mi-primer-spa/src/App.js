// La siguiente línea se puede incluir en su archivo src/index.js o App.js 
import  'bootstrap/dist/css/bootstrap.min.css' ;
//luego de instalar react-router-dom importar:
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar} from './paginas/components/navbar'
import { Carousel } from './paginas/components/carousel';
import { Footer } from "./paginas/components/footer";
import { Contacto } from './paginas/contacto';
import { Producto} from './paginas/producto';
import { AcercaDe } from './paginas/acerca-de';
import './App.css';
import React  from "react";

function App() {
  return (
    <Router>
      <Navbar/>
    <Carousel />
    <Footer />
    <Routes>   
        <Route  path='/contacto' Component={Contacto} ></Route>
        <Route path='/acerca-de' Component={AcercaDe} ></Route>  
        <Route path='/producto' Component={Producto} ></Route>
</Routes>
<Contacto/>
<Producto/>
<AcercaDe/>
  </Router>
    );
}

export default App;
