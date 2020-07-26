import React from 'react';

import './homepage.style.scss';
import logo from '../../assets/hero-logo.png';
import cup from '../../assets/cup.jpg';
import mugs from '../../assets/mugs.jpg';

const homepage = () => (
    <div className="home">
        <div className="hero">
            <div className="hero-text">
                <img id='main-logo' src={logo} alt="logo" />
                <h1>Caya</h1>
                <h3>Specialty Coffee and Tea</h3>
            </div>
        </div>
        <div className="content">
            <div className="blurb1">
                <img className="blurb-pic" src={cup} alt="cup" />
                <div className="blurb1-text">
                    <h3>A little about us</h3>
                    <p>We like tasty snacks, not vegtables!</p>
                </div>
            </div>
            <div className="blurb2">
                <div className="blurb2-text">
                    <h1>hey</h1>
                </div>
                <img className="blurb-pic" src={mugs} alt="mugs" />
            </div>
        </div>
    </div>
)

export default homepage;