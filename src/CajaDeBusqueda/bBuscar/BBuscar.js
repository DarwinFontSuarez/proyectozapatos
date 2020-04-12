import React from 'react';
import './BBuscar.css';
import zapatos from '../zapatos.json';

class BBuscar extends React.Component {
    constructor(props){
        super(props);
        this.flag = '';
        this.Onclick = this.Onclick.bind(this);
        //this.BuscarValor.bind(this);
    };

    Onclick (e){
        const zapato = zapatos;
        let result = 0;
        let valor = this.props.value;
        function buscarTitle(obj){//callback para funcion filter
/*1 recorro el objto con for..in
2 verificar si la porp es una cadena si lo es 
3 llamo a String.include()[este metodo es sensible a mayusculas y minusculas] 
con el value del input
*/
            let bandera ;
            for( let propiedad in obj){
                if (typeof(obj[propiedad]) === 'string'){
                    bandera = obj[propiedad].includes(valor);                    
                    if(bandera === true) return true;
                };
            };
            if(bandera === true) {
                return true;
            }else{
                return false;
            }
        };
        
        result = zapatos.results.filter(buscarTitle);
        this.props.resultado(result);
        
        e.preventDefault();
    };

    render (){
        
        return ( <button id= "BBuscar" className= "BBuscar" onClick= {this.Onclick}> 🔎 </button> ); 
    }
}
export default BBuscar;
