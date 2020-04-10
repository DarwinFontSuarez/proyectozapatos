//Barra de Menu
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './BarraDeMenu.css';

class BarraDeMenu extends React.Component {
    render(){
        return (
            <Router>
            <div id = "barraDeMenu" className = "divBarraDeMenu">
                <ul className = "lista">
                    <li className = "elementoLista"> 
                        Usuario > 
                    </li>
                    <li className = "elementoLista">
                        <Link to= "/Categorias"> Categorias </Link>
                    </li>
                    <li className = "elementoLista">
                        <Link to = "/TiendasAsociadas"> Tiendas asociodas </Link>
                    </li>
                    <li className = "elementoLista"> 
                        <Link to ="/BusqueadasRecientes"> Busquedas Recientes </Link>
                    </li>
                    <li className = "elementoLista"> 
                        <Link to = "/Ofertas"> Ofertas </Link>
                    </li>
                    <li className = "elementoLista"> 
                        <Link to = "/Ayuda"> Ayuda </Link>
                    </li>
                </ul>
            <Switch>
            </Switch>
            </div> 
            </Router>      
            
                  
        );
    }
}
export default BarraDeMenu;

