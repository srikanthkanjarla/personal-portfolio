// import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FontAwesome from 'react-fontawesome';
import './header.css';


const Header = () => (
    <header class="header" id="nav-bar">
      <nav class="navbar">
        <div class="logo">
          <p class="logo-text"></p>
        </div>
        <div>
          <AnchorLink href="#home">Home</AnchorLink>
          <AnchorLink href="#portfolio">Portfolio</AnchorLink>
          <AnchorLink href="#about">About Me</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
          <a href="https://github.com/srikanthkanjarla" target="_blank">
            <FontAwesome name="github" size="2x" />
          </a>
        </div>
      </nav>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
