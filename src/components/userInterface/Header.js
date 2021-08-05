import React from 'react'
import logo from '../../img/sheikah.png'
import Banner from './Banner';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='pageTop'>
            <Banner />
            <header className='header'>
                <img src={logo} id='logo' alt='sheikah symbol'/>
                <h1 className='headerTitle'><Link to="/">Hyrule Compendium</Link></h1>
                <h1 className='headerTitle'><Link to="/About">About</Link></h1>
            </header>        
        </div>

    )
};

export default Header;
