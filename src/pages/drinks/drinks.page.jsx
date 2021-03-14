import React from 'react';

import './drinks.style.scss';
import cups from '../../assets/cups.jpg'

import pastries from '../../assets/pastries.jpg';
import beanLogo from '../../assets/bean-logo.jpg';
import koppi from '../../assets/koppi&coldbrew.jpg'

const drinks = () => (
    <div className="drinks">
        <h1>Our Beverages</h1>
        {/* <img className="head-image" src={cups} alt="drinks" /> */}

        <div className="content">
            <div className="blurb blurb1">
                <img className="blurb-pic" src={koppi} alt="cup" />
                <div className="blurb1-text">
                    <h2>Our Coffee and Tea</h2>
                    <p>We offer the finest of Koppi's coffee beans. </p>
                    <p>Our teas include this beautiful tricolore tea, from Postcard Teas. Come in for a hot cup of tea on a rainy day.</p>
                </div>
            </div>
            <div className="blurb blurb2">
                <div className="blurb2-text">
                    <h2>We make drinks right</h2>
                    <p>Our drinks are made to order. Have some cold brew or a hot cuppaccino. </p>
                    <p>Our teas rock the house!</p>
                </div>
                <img className="blurb-pic" src={cups} alt="mugs" />
            </div>
            <div className="blurb blurb1">
                <img className="blurb-pic" src={pastries} alt="cup" />
                <div className="blurb1-text">
                    <h2>Sandwiches and Patries</h2>
                    <p>Fresh sandwiches ready for you, from the Caya kitchen on freshly baked pastries and rolls from Zak's. </p>
                </div>
            </div>
        </div>
    </div>
)

export default drinks;