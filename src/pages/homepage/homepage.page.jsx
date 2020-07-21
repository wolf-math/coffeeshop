import React from 'react';

import './homepage.style.scss';
import logo from '../../assets/hero-logo.png'

const homepage = () => (
    <div className="home">
        <div className="hero">
            <div className="hero-text">
                <img id='main-logo' src={logo} alt="logo" />
                <h1>Caya Coffee Co.</h1>
                <h3>Artisan Coffee</h3>
            </div>
        </div>
    </div>
)

export default homepage;