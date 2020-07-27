import React from 'react';
import { Link } from 'react-router-dom';
// import { FaInstagram } from 'react-icons/fa';

import './footer.style.scss';

const Footer = () => (
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
            {/* <FaInstagram className="icon" /> */}
        </div>
    </div>
)

export default Footer;