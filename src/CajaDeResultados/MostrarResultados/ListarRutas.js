/*
ListarRutas 
Props: values
*/
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

export default class ListarRutas extends Reat.Component{
    render (){
        if(this.props.values.length != 0){//if 1
            let rutas = this.props.values.map((valor)=>{

                };//end flecha map
            );//end map
            return (
                <div id = "ListarRutas">
                   
                </div>
            );//END return
        }//ende if 1
    };
}
