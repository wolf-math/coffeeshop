import React from 'react';
import { Link } from 'react-router-dom';


import './footer.style.scss';

import { FaInstagram, FaFacebook} from 'react-icons/fa';


const Footer = () => (
    <>
    <div className="footer">
        <div className="contact">
            <div className="address">
                <p>Borochov 5</p>
                <p>Raanana, Israel</p>
            </div>
            <p>Phone: 058-678-8322</p>
        </div>
        <div className="menu">
            <Link className='option' to='/'>
                home
            </Link>
            <Link className='option' to='/about'>
                about
            </Link>
            <Link className='option' to='/drinks'>
                drinks
            </Link>
            <Link className='option' to='/menu'>
                menu
            </Link>
            <Link className='option' to='contact'>
                contact
            </Link>
        </div>
        <div className="follow">
            <div className="social"><a href="https://www.facebook.com/cayacoffee.co/"><FaFacebook /> cayacoffee</a></div>
            <div className="social"><a href="https://www.instagram.com/caya_coffee/"><FaInstagram /> caya_coffee</a></div>
        </div>
    </div>
    </>
)

export default Footer;