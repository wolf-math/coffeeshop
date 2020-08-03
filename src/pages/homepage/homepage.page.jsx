import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.style.scss';
import logo from '../../assets/hero-logo_white.png';
import cup from '../../assets/cup.jpg';
import mugs from '../../assets/mugs.jpg';

const homepage = () => (
    <div className="home">
        <div className="hero">
            <div className="hero-text">
                <img id='main-logo' src={logo} alt="logo" />
                <h1>CAYA</h1>
                <h3>Specialty Coffee and Tea</h3>
            </div>
        </div>
        <div className="content">
            <div className="blurb blurb1">
                <img className="blurb-pic" src={cup} alt="cup" />
                <div className="blurb1-text">
                    <h2>A little about us</h2>
                    <p>We like tasty snacks, not vegtables!</p>
                    <Link className='option' to='about'>Learn More</Link>
                </div>
            </div>
            <div className="blurb blurb2">
                <div className="blurb2-text">
                    <h2>Our coffee is better than yours</h2>
                    <p>Taste it to belive it</p>
                    <Link className='option' to='about'>Learn More</Link>
                </div>
                <img className="blurb-pic" src={mugs} alt="mugs" />
            </div>
        </div>
    </div>
)

export default homepage;