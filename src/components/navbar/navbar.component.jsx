import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

import './navbar.style.scss';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const [navStyle, setNavStyle] = useState('nav')

    const toggle = () => {
        setVisible(!visible)
        setNavStyle(visible ? 'nav' : 'nav-click')
    }

    const menu = (
        <div onClick={toggle} className="nav-menu">
            <Fade><a className='option' href='/'>home</a></Fade>
            <Fade><a className='option' href='about'>about</a></Fade>
            <Fade><a className='option' href='drinks'>drinks</a></Fade>
            <Fade><a className='option' href='menu'>menu</a></Fade>
            <Fade><a className='option' href='contact'>contact</a></Fade>
        </div>); 

    return(
        <div className={navStyle}>
            <FaBars className="menu" onClick={toggle} />
            {!visible ? null : menu}
        </div>
    )
}

export default Navbar;
