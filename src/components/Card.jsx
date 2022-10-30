import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
        <div className="card-box">
            <div className='div-butt'>
                <button onClick={onClose} className="button-close">X</button>
            </div>
            <Link to={`/city/${id}`}>
                <h3 className="name">{name}</h3>
            </Link>
            <div className='info-cont'>
                <ul className='info'>
                    <li>Min</li>
                    <li>{min}°C</li>
                </ul>
                <ul className='info'>
                    <li>Max</li>
                    <li>{max}°C</li>
                </ul>
            </div>
            <div>
                <img className="icono" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"}/>
            </div>          
        </div>
    );
}