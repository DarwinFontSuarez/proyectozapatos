import React from 'react';
import './BBuscar.css';

class BBuscar extends React.Component {
    constructor(props){
        super(props);
        this.Onclick = this.Onclick.bind(this);
    };
Onclick (){
    alert(this.props.value);
}
    render (){
        const boton = React.createElement('input',{
                    type: 'button',
                    id: 'BBuscar',
                    className: 'BBuscar',
                    value: '🔎',
                    onClick: this.Onclick
                    }
                    );
        return ( boton  ); 
    }
}
export default BBuscar;
