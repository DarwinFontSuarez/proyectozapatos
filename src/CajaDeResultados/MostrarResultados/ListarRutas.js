/*
ListarRutas 
Props: values => Contiene un array con los cuales se crean los Route
        setIdDetalle => Modifica el estado de CajaDeResultados y lo Baja A MostrarDetalle 
*/
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import MostrarDetalles from '../MostrarDetalle/MostrarDetalles.js';


export default class ListarRutas extends React.Component{
    render (){
        if(this.props.values.length != 0){//if 1
            let setIdDetalle = this.props.setIdDetalle;
            let rutas = []; 
            for(let i =0, id = ''; i <= this.props.values.length -1;i++){
                id = this.props.values[i].id
                
                rutas.push({path: '/'+id, main: this.props.setIdDetalle(id) });
            };//end for 
            return (
                <div id = "ListarRutas">
                    <Switch>
                        {rutas.map((ruta,index)=>(
<Route key={index}
                path={ruta.path}
children = {ruta.main}
/>
))}
                    </Switch>
                </div>
            );//END return
        }//ende if 1
    };
}
