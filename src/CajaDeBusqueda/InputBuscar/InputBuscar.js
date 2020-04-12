import React from 'react';
import './InputBuscar.css';


class InputBuscar extends React.Component{
    constructor (props){
        super(props);
        this.state = {value: ''};
        this.OnChange = this.OnChange.bind(this);
    }

    OnChange (event){//Elevando el estado
        this.props.elevar(event.target.value);
    }

    render (){
        const entrada = React.createElement('input', {type: 'text', id: 'entrada', className: 'Input', onChange : this.OnChange});
        return entrada ;
    }
}

export default InputBuscar;

