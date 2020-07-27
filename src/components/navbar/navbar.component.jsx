import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.style.scss';
// import logo from '../../assets/hero-logo.png';
import logo from '../../assets/horizontal_logo_cream.png';

const Navbar = () => (
    <div className="navbar">
        <div className="nav-logo">
            <Link className='option' to='/'>
                <img id="nav-logo" src={logo} alt=""/>
            </Link>
        </div>

        <div className='options'>
            <Link className='option' to='/'>
                home
            </Link>
            <Link className='option' to='drinks'>
                our drinks
            </Link>
            <Link className='option' to='about'>
                about
            </Link>
            <Link className='option' to='contact'>
                contact
            </Link>
        </div>
    </div>
)

export default Navbar;