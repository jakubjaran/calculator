import React from 'react';
import Logo from '../../assets/react_logo.png';
import './About.css';

const About = () => (
    <div className="About">
        <h1>Hello World!</h1>
        <p>I'm happy to see you there!</p>
        <p>It's a simple calculator app made with</p>
        <img src={Logo} alt="react logo"/>
        <p>Feel free to test it and have a nice day!</p>
    </div>
);

export default About;