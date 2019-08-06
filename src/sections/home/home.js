import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeadRoom from 'react-headroom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header/header';
import './home.css';

const Home = () => {
  const homeContainer = React.createRef();
  const [containerHeight, setcontainerHeight] = useState(0);
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            role
          }
        }
      }
    `
  );

  useEffect(() => {
    setcontainerHeight(homeContainer.current.offsetHeight - 66);
  });

  return (
    <div className="home-content" ref={homeContainer}>
      <HeadRoom pinStart={containerHeight}>
        <Header />
      </HeadRoom>
      <div className="profile-container">
        <h1 className="profile-title">
          Hello, my name is{' '}
          <span className="profile-name" data-text="Srikanth Kanjarla">
            {data.site.siteMetadata.title}
          </span>
        </h1>
        <h6 className="profile-text">
          I am a <span className="profile-role">{data.site.siteMetadata.role}</span> living in Hyderabad, India
        </h6>
        <AnchorLink href="#about" className="contact-link">
          Know More <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5em' }} />
        </AnchorLink>
      </div>
    </div>
  );
};

export default Home;
