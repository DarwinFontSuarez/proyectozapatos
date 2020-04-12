import React from 'react';

import MostrarResultados from './MostrarResultados/MostrarResultados.js';
import MostrarDetalles from './MostrarDetalle/MostrarDetalles.js'

export default class CajaDeResultados extends React.Component {
constructor(props){
super(props);
this.state = {idDetalle : ''};
this.setIdDetalle = this.setIdDetalle.bind(this);
}
setIdDetalle (nId){
    this.setState({idDetalle : nId})
}

    render () {
return (
<div>
<MostrarResultados values = {this.props.values} setIdDetalle = {this.setIdDetalle}/>
<MostrarDetalles id = {this.state.idDetalle}/>
</div>
);
}
 
}

