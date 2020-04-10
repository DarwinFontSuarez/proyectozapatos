import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CajaDeBusqueda from './CajaDeBusqueda/CajaDeBusqueda.js';
import BarraDeMenu from './BarraDeMenu/BarraDeMenu.js';


function App() {
  return (
    <div id = "header" className = "App">
        <CajaDeBusqueda />
        <BarraDeMenu />
    </div>
  );
}

export default App;
