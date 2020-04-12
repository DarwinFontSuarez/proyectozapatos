import React from 'react';
import {  Link } from "react-router-dom";

export default class ValoresList extends React.Component{        
render(){        
let retorno = 0;
console.log(this.props.values)
        retorno = this.props.values.map((producto)=>
            {
            //rutas.push({ path: '/'+producto.id, main: () => <h1> {producto.tilte} </h1> }); 
            return (
                <li key= {producto.id}>
                <Link to = {'/'+producto.id}>{producto.title}</Link>
                </li>
                );
            }
        );
        return retorno;
}
};
