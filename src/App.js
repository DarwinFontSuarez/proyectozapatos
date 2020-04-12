import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CajaDeBusqueda from './CajaDeBusqueda/CajaDeBusqueda.js';
import BarraDeMenu from './BarraDeMenu/BarraDeMenu.js';
import CajaDeResultados from './CajaDeResultados/CajaDeResultados.js';

class App extends React.Component{
    constructor (props){
        super(props);
        this.state = {results : []};//result guardara los resultados de la busqueda despues de hacer click en el boton BBuscar
        this.ObtenerResults = this.ObtenerResults.bind(this);
    };

ObtenerResults (resultados) {//Mnejando el estado
    this.setState({results: resultados})
}
render (){//elvarResults transfiero el metodo q maneja el estado de App
  
return (
    <div id = "header" className = "App">
        <header>
        <CajaDeBusqueda elvarResults = {this.ObtenerResults}/>
        <BarraDeMenu />
        </header>
        <CajaDeResultados values = { this.state.results}/>
    </div>
  );
};
}
export default App;
