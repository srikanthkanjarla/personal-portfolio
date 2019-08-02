import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = props => {
  const { children } = props;
  return (
    <>
      <div id="home">
        <main>{children}</main>
        <footer style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://github.com/srikanthkanjarla">srikanth kanjarla</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
