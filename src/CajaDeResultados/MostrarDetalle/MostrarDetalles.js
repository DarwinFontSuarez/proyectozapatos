/*Props: values*/

import React from 'react';
import zapatoDetalle from './zapatoDetalle.json';

export default class MostrarDetalles extends React.Component{
render (){
return (
<div id = "detalles">
    <h1>{this.props.id}</h1>
</div>
);
}
}
