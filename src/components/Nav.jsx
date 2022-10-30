import React from 'react';
import SearchBar from './Searchbar.jsx';
import About from './About.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}){
    return (
        <nav className="navBar">
            <Link to={'/'}>
                <span className="span">
                    Díaz Joaquín - Weather App
                </span>
            </Link>
            <SearchBar
                onSearch={onSearch}
                />
            <Link to={'/About'}>
                <About/>
            </Link>
        </nav>
    );
}
