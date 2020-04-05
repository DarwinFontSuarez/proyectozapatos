import React from 'react';
import './Logo.css';
//🔎
class Logo extends React.Component {
constructor(props){
super(props);
}
    render (){
        const logo = React.createElement('img',{src: './7.jpg',id : 'logo', className: 'Logo'});
        return logo;
    }
}
export default Logo;
