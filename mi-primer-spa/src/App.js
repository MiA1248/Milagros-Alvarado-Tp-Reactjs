// La siguiente línea se puede incluir en su archivo src/index.js o App.js 
import  'bootstrap/dist/css/bootstrap.min.css' ;
//luego de instalar react-router-dom importar:
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Contacto from './paginas/contacto';
import Producto from './paginas/producto';
import  AcercaDe  from './paginas/acerca-de';
import Home from './paginas/home';
import './App.css';
import React  from "react";

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/producto' element={<Producto />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
    </Routes>
  </Router>
    );
}

export default App;
