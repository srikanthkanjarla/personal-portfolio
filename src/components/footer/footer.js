import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copy-right">
        Coded with <span className="heart">&hearts;</span> by SrikanthKanjarla © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
