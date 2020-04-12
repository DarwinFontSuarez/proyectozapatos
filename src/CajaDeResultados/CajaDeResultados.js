import React from 'react';

import MostrarResultados from './MostrarResultados/MostrarResultados.js';


export default class CajaDeResultados extends React.Component {
    render () {
return (
<div>
<MostrarResultados values = {this.props.values}/>
</div>
);
}
 
}

