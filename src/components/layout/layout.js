import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = props => {
  const { children } = props;
  return (
    <>
      <div id="home">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
