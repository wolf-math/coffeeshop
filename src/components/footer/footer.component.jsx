import React from 'react';
import { Link } from 'react-router-dom';
// import { FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <div className="footer">
        <div className="contact">
            <div className="address">
                <p>666 Devil's Parkway</p>
                <p>Raanana, Israel</p>
            </div>
            <p>Phone: 666-666-6666</p>
            <p>email: Lucifer@Hell.com</p>
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