import React from 'react';
import './About.css';

import ReactLogo from '../../assets/react_logo.png';
import GithubLogo from '../../assets/github_logo.png';

const About = () => (
    <div className="About">
        <h1>Hello Friend!</h1>
        <p>I'm happy to see you there!</p>
        <p>It's a simple calculator app made with</p>
        <img
            className="react"
            src={ReactLogo}
            alt="react logo"
        />
        <p>Feel free to test it and have a nice day!</p>
        <p className="small">Also check out my GitHub profile:</p>
        <a
            href="https://github.com/jakubjaran"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="github"
                src={GithubLogo}
                alt="github-logo"
            />
        </a>
    </div>
);

export default About;