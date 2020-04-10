import React from 'react';
import './CajaDeBusqueda.css';
import BBuscar from './bBuscar/BBuscar.js';
import InputBuscar from './InputBuscar/InputBuscar.js';
import Logo from './Logo/Logo.js'
import zapatos from './zapatos.json';

class CajaDeBusqueda extends React.Component {
constructor(props){
super(props);
    this.state = {value: ''};
    this.OnChange = this.OnChange.bind(this);
}
OnChange(valor){
    this.setState({value: valor});
}
 render (){
 
   return ( 
    <div className = "CajaDeBusqueda" id = "CajaDeBusqueda" >
        
        <form > <Logo  />
                <InputBuscar elevar = {this.OnChange}/>
                <BBuscar value = {this.state.value}/>
            
                <a href="#"> Suscribase a nuestra tienda. </a>
                
        </form>
    </div>
)  
 }
}

export default CajaDeBusqueda;
