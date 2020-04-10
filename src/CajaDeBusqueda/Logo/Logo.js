import React from 'react';
import './Logo.css';
//🔎
class Logo extends React.Component {

    render (){
        //const logo = React.createElement('img',{src: './7.jpg',id : 'logo', className: 'Logo'});
        return <img src="./7.jpg" alt = "logo"className = "Logo" />;
    }
}
export default Logo;
