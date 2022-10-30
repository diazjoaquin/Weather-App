import React from 'react';
import './City.css';

export default function City({city}) {

    if (!city) {
        alert('City not founded');
        return (<div>City not founded</div>)
    }

    return (
        <div className="city">
            <div className="Container">
                <h3 className="city-name">{city.name}</h3>
                <div className="Informacion"> 
                <div>Average temp: {city.temp} °C</div>
                <div>Weather: {city.weather}</div>
                <div>Feels like: {city.feels_like} °C</div>
                <div>Wind: {city.wind}</div>
                <div>Pressure: {city.pressure} hPa</div>
                <div>Humidity: {city.humidity} %</div>
                <div>Latitude: {city.latitud} °</div>
                <div>Longitude: {city.longitud} °</div>
                </div>
            </div>
        </div>
    )
};