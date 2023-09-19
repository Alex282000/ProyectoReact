import React from 'react';
//import logo2 from '../images/perrito.png';
import '../css/estilos.css';

export function Logoproyecto(props) {
    return (
    <div className='contenedor'>
        <img className='img' src={require(`../images/${props.img}`)} alt='logo' />
        <div className='caja'>
            <p className='titulo'>{props.titulo}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    </div>);
}

//export default Logoproyecto;