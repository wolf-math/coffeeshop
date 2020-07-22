import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.style.scss';
import logo from '../../assets/hero-logo.png'

const navbar = () => (
    <div className="navbar">
        <div id='options'>
            <Link className='option' to='/'>
                <img src={logo} alt=""/>
            </Link>
        
        </div>
    </div>
)

export default navbar;