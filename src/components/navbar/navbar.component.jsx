import React from 'react';
import { Link } from 'react-router-dom';
// import {Navbar as Nav } from 'react-bootstrap'

import './navbar.style.scss';
import logo from '../../assets/horizontal_logo_brown.png';

const Navbar = () => (
    <div className="navbar">
        <div className="nav-logo">
            <Link to='/'>
                <img id="nav-logo" src={logo} alt=""/>
            </Link>
        </div>

        <div className='options'>
            <Link className='option' to='/'>
                home
            </Link>
            <Link className='option' to='about'>
                about
            </Link>
            <Link className='option' to='drinks'>
                menu
            </Link>
            <Link className='option' to='contact'>
                contact
            </Link>
        </div>
    </div>
)

export default Navbar;