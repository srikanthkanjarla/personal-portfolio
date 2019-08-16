import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const ThankYou = () => {
  return (
    <Layout>
      <div className="thankyou-msg">
        <h2>Thank you for your submission!</h2>
        <Link to="/">go back to the site</Link>
      </div>
    </Layout>
  );
};

export default ThankYou;
