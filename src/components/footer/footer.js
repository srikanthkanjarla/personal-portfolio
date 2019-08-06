import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faFacebookF, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const SocialIcon = props => {
  const { URL, title, icon } = props;
  return (
    <a href={URL} title={title}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              github
              twitter
              facebook
              freeCodeCamp
              linkedIn
            }
          }
        }
      }
    `
  );
  const { github, twitter, facebook, linkedIn, freeCodeCamp } = data.allDataJson.edges[0].node;
  return (
    <footer className="footer">
      <div className="social-links">
        <SocialIcon title="github" URL={github} icon={faGithub} />
        <SocialIcon title="twitter" URL={twitter} icon={faTwitter} />
        <SocialIcon title="linkedin" URL={linkedIn} icon={faLinkedin} />
        <SocialIcon title="facebook" URL={facebook} icon={faFacebookF} />
        <SocialIcon title="freecodecamp" URL={freeCodeCamp} icon={faFreeCodeCamp} />
      </div>
      <p className="copy-right">srikanthkanjarla © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
