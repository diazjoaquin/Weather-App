import './App.css';
import React, { useState } from 'react';
import { Route} from 'react-router-dom';
import City from './components/City.jsx';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


function App() {
  
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  // useState (Hook) nos permite trackear estados en los componentes de función.
  // recibe como parametro el estado inicial y retorna un array con el valor
  // actual en la pos 0, y una función que actualiza dicho estado en la pos 1.

  const [cities, setCities] = useState([]);

  // La funcion onClose recibe como parametro el id de la ciudad que 
  // queremos eliminar, y luego mediante setCities, borra dicha 
  // ciudad del arreglo cities.

  function onClose (id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }

  // La funcion onSearch recibe como parametro el nombre de una ciudad,
  // y busca dentro de la API si ésta existe, de ser así crea un nuevo
  //  objeto con todos datos de ésta ciudad, y lo introduce dentro 
  // del arreglo cities. De lo contrario muestra un alert "city not founded".

  function onSearch(city) {
    // llamamos a la API del clima mediante un fetch.
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(json => {
      if (json.main !== undefined){
        const city = {
          min: Math.round(json.main.temp_min),
          max: Math.round(json.main.temp_max),
          img: json.weather[0].icon,
          id: json.id,
          wind: json.wind.speed,
          temp: json.main.temp,
          name: json.name,
          weather: json.weather[0].main,
          clouds: json.clouds.all,
          latitud: json.coord.lat,
          longitud: json.coord.lon,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          feels_like: json.main.feels_like
        };
        setCities(oldCities => [city]);
      } else {
        alert("City not founded");
      }
    });
  }

  // la función onFilter recibe como parametro el id de una ciudad,
  // y recorre el arreglo cities buscando si existe una ciudad 
  // con el mismo id que el pasado por parametro. De ser así 
  // muestra dicha ciudad, la cual es un objeto que contiene 
  // propiedades como presion, humedad, etc.

  function onFilter (cityId) {
    let city = cities.filter(city => city.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
          <Route 
          path='/' 
          render={() => <Nav onSearch={onSearch} />}/>
          <Route 
          path='/' 
          exact render={() => <Cards cities={cities} onClose={onClose}/>}/>
          <Route 
          path='/about' 
          exact render={() => <About/>}/>
          <Route
          exact path='/city/:cityId'
          render={({match}) => <City city={onFilter(match.params.cityId)}/>}/>
    </div>
  );
}

export default App;
