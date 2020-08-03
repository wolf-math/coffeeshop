import React from 'react';
import { Link } from 'react-router-dom';

import './footer.style.scss';

import { FaInstagram, FaFacebook} from 'react-icons/fa';


const Footer = () => (
    <>
    <div class="push"></div>
    <div className="footer">
        <div className="contact">
            <div className="address">
                <p>666 Devil's Parkway</p>
                <p>Raanana, Israel</p>
            </div>
            <p>Phone: 055-5555555</p>
            <p>email: Lucifer@Heck.com</p>
        </div>
        <div className="menu">
            
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
        <div className="follow">
            <div className="social"><FaInstagram /> caya_coffee</div>
            <div className="social"><FaFacebook /> cayacoffee.co </div>
        </div>
    </div>
    </>
)

export default Footer;