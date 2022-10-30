import React from 'react';
import { useState } from 'react';
import './Searchbar.css';



export default function SearchBar({onSearch}){
    const [city, setCity] = useState("");

    return (
        <form className="form" onSubmit={(event) => {event.preventDefault();
        onSearch(city);
        setCity("");
        }}>
            <input className="text" type="text" placeholder='City...' value={city} onChange={event => setCity(event.target.value)}/>
            <input className="button" type="submit" value="Add" />
        </form>
    )

}