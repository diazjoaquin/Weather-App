import React from 'react';
import Card from './Card.jsx'
import './Cards.css';

export default function Cards ({cities, onClose}) {
    return (
        <div className='cards'>
            {cities.map(citie => <Card
                key={citie.id}
                max={citie.max}
                min={citie.min}
                name={citie.name}
                img={citie.img}
                onClose={() => onClose(citie.id)}
                id={citie.id}
                />)}
        </div>
    );
}