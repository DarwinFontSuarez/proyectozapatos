/*
Props:
    values => Con los Resultados a Mostrar
    setIdDetalle => Para elevar el valor a mostrar en MostrarDetalles
*/
import React from 'react';
import ValoresList from './ValoresList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListarRutas from './ListarRutas.js';

export default class MostrarResultados extends React.Component{
constructor (props){
super(props);
//this.state = {values : this.props.values};
}
    
    render (){
        if( (this.props.values.length !== 0)){//if 1
            return (<Router>
                        <div style={{ padding: "10px", width: "40%", background: "#f0f0f0"}}>
                            <h2>Resultados de la busqueda: {this.props.values.length}</h2>
                            
                                <ul>
                                    <ValoresList values = {this.props.values}/>
                                </ul>
                                
                        </div>
                        <ListarRutas values = {this.props.values} setIdDetalle = {this.props.setIdDetalle}/>
                    </Router>
            );
        }else {
            return (
                <div style={{ padding: "10px", width: "40%", background: "#f0f0f0"}}>
                    <h1>Catiegorias</h1>implemntar lista de categorias
                </div>
            );
        }//End if 1
    };//end render
}//end class
