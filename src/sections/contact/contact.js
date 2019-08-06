import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SectionLayout from '../../components/section/section';
import './contact.css';

const style = {
  borderTop: '1px solid #ff0088',
};

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              email
              facebook
              linkedIn
              twitter
            }
          }
        }
      }
    `
  );

  const [isCopied, setIsCopied] = useState(false);
  let timeoutID;
  const resetIsCopied = () => {
    timeoutID = setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  clearTimeout(timeoutID);
  const { email, twitter, facebook, linkedIn } = data.allDataJson.edges[0].node;
  return (
    <SectionLayout title="Contact me" id="contact" style={style}>
      <div className="contact-container">
        <p className="contact-msg">I&apos;d like to talk! Email me at the address below</p>
        <div className="email-container">
          <a href={`mailto:${email}`} className="contact-email" title="send email">
            {email}
          </a>
          <CopyToClipboard text={email} onCopy={() => setIsCopied(true)}>
            <button type="button" className="copy-btn" onClick={resetIsCopied}>
              {isCopied ? <span style={{ marginRight: '0.3em', fontSize: '0.9em' }}>Copied</span> : <span>Copy</span>}
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </CopyToClipboard>
        </div>

        <div className="social-links">
          <a href={twitter} className="contact-icon twitter-icon" title="Twitter Profile">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={linkedIn} className="contact-icon linkedin-icon" title="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={facebook} className="contact-icon facebook-icon" title="Facebook Profile">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
