import React from 'react';

import './about.style.scss';

import gabi from '../../assets/gabi-pour.jpg'

const about = () => (
    <div className="about">
        <h1>Caya Coffee</h1>
        <div className="content">
            <img className="gab" src={gabi} alt="A Happy Barista" />
            <p>Welcome to Caya! Our mission is to make our guests feel welcome, a place to meet with friends, relax after a morning run, meet with a client, or just to come and enjoy delicious coffee or tea with fresh pastries. We can't wait to serve you!</p>
        </div>
    </div>
)

export default about;