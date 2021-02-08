import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './homepage.style.scss';
import logo from '../../assets/hero-logo_white.png';
import mugs from '../../assets/mugs.jpg';
import pastries from '../../assets/pastries.jpg';
import beanLogo from '../../assets/bean-logo.jpg';

const homepage = () => (
    <div className="home">
        <Fade>
        <div className="hero">
            <div className="hero-text">
                <img id='main-logo' src={logo} alt="logo" />
                <h1>CAYA</h1>
                <h3>Specialty Coffee and Tea</h3>
            </div>
        </div>
        </Fade>
        <div className="content">
            <Fade>
            <div className="blurb blurb1">
                <img className="blurb-pic" src={beanLogo} alt="cup" />
                <div className="blurb1-text">
                    <h2>A little about us</h2>
                    <p>The name Caya comes from the Zulu word "ikhaya", which means home. Caya was built on the idea of community and we always wanted Caya to be a home away from home for our guests.</p>
                    <Link className='option' to='about'>Learn More</Link>
                </div>
            </div>
            </Fade>
            <Fade>
            <div className="blurb blurb2">
                <div className="blurb2-text">
                    <h2>Our coffee and Tea</h2>
                    <p>We offer the finest of Koppi's coffee beans. </p>
                    <p>Our teas include this beautiful tricolore tea, from Postcard Teas. Come in for a hot cup of tea on a rainy day.</p>
                    <Link className='option' to='about'>Learn More</Link>
                </div>
                <img className="blurb-pic" src={mugs} alt="mugs" />
            </div>
            </Fade>
            <Fade>
            <div className="blurb blurb1">
                <img className="blurb-pic" src={pastries} alt="cup" />
                <div className="blurb1-text">
                    <h2>Sandwiches and Patries</h2>
                    <p>Fresh sandwiches ready for you, from the Caya kitchen on freshly baked pastries and rolls from Zak's. </p>
                    <Link className='option' to='about'>Learn More</Link>
                </div>
            </div>
            </Fade>
        </div>
    </div>
)

export default homepage;