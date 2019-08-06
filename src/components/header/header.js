import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './header.css';

const Header = () => {
  return (
    <header className="header" id="nav-bar">
      <nav className="navbar">
        <div className="logo">
          <p className="logo-text">&lt; S &gt;</p>
        </div>
        <div className="nav-links">
          <AnchorLink href="#home">Home</AnchorLink>
          <AnchorLink href="#portfolio">Portfolio</AnchorLink>
          <AnchorLink href="#about">About Me</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
          <a
            href="https://github.com/srikanthkanjarla"
            target="_blank"
            rel="noopener noreferrer"
            title="github profile"
            className="github-profile"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.2em' }} /> Github
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
