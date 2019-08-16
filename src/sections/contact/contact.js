import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import SectionLayout from '../../components/section/section';
import './contact.css';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

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
              github
            }
          }
        }
      }
    `
  );

  const [state, setState] = useState({});

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => error);
  };

  const { email, twitter, facebook, linkedIn, github } = data.allDataJson.edges[0].node;
  return (
    <SectionLayout title="Let's Get in touch" id="contact" style={style}>
      <div className="contact-container">
        <form
          name="contact"
          method="post"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="text" name="email" placeholder="Your Email" required onChange={handleChange} />
          <textarea rows="4" name="message" placeholder="Message" required onChange={handleChange} />
          <button type="submit">
            send message <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>

        <div className="social-links">
          <p>Join me here</p>
          <div className="wrapper">
            <a href={twitter} className="contact-icon twitter-icon" title="Twitter Profile">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={github} className="contact-icon facebook-icon" title="Facebook Profile">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={linkedIn} className="contact-icon linkedin-icon" title="LinkedIn Profile">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={facebook} className="contact-icon facebook-icon" title="Facebook Profile">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={`mailto:${email}`} className="contact-icon contact-email" title="send email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
