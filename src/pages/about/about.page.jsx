import React from 'react';

import './about.style.scss';

import tray from '../../assets/tray.jpg';

const about = () => (
    <div className="about">
        <h1>About Caya Coffee</h1>
            <img className="head-image" src={tray} alt="coffee" />
        <div className="content">
            <p>Welcome to Caya! Our mission is to make our guests feel welcome, a place to meet with friends, relax after a morning run, meet with a client, or just to come and enjoy delicious coffee or tea with fresh pastries. We can't wait to serve you!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Non sodales neque sodales ut. Vulputate ut pharetra sit amet aliquam. Arcu risus quis varius quam quisque id diam vel quam. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Euismod elementum nisi quis eleifend quam adipiscing. Sit amet luctus venenatis lectus magna fringilla. Mus mauris vitae ultricies leo integer malesuada. Amet dictum sit amet justo donec enim. Id diam maecenas ultricies mi eget mauris pharetra et. Hendrerit dolor magna eget est. Eget lorem dolor sed viverra ipsum. Arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. In vitae turpis massa sed elementum tempus. Pellentesque eu tincidunt tortor aliquam nulla. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
        </div>
    </div>
)

export default about;