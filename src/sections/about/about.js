import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faReact, faGit, faJs } from '@fortawesome/free-brands-svg-icons';
import reduxIcon from '../../images/redux-icon.svg';
import gatsbyIcon from '../../images/gatsby-icon.svg';
import graphQLIcon from '../../images/graphql-icon.svg';
import nextIcon from '../../images/next-icon.png';
import SectionLayout from '../../components/section/section';
import './about.css';

const About = () => {
  const style = {
    backgroundColor: '#eafbfc',
    borderTop: '1px solid #6330de',
  };

  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              certifications {
                title
                url
              }
            }
          }
        }
      }
    `
  );

  const { certifications } = data.allDataJson.edges[0].node;

  return (
    <SectionLayout title="About me" style={style} id="about">
      <div className="about-container">
        <p>
          My name is Srikanth Kanjarla, and I live in Hyderabad, India. My Bachelor&apos;s degree is in Information
          Technology
        </p>
        <p>
          I&apos;m a self-taught web developer learning through FreeCodeCamp and MOOC&apos;s. I enjoy sharing my passion
          for Front End Development by building projects as a cohort participant and facilitating online learning
          groups.
        </p>
        <p>
          Currently doing{' '}
          <a href="https://chingu.io/" target="_blank" rel="noopener noreferrer">
            Chingu.io Cohort project
          </a>
          , participating in{' '}
          <a href="https://w3develops.org/" target="_blank" rel="noopener noreferrer">
            W3Devlops React study group,
          </a>{' '}
          solving{' '}
          <a href="https://learn.freecodecamp.org" target="_blank" rel="noopener noreferrer">
            FreeCodeCamp - Apis and Microservices
          </a>{' '}
          challenges and learning React Native from{' '}
          <a
            href="https://courses.edx.org/courses/course-v1:HarvardX+CS50M+Mobile/course/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EDX-CS50&apos;s Mobile App Development with React Native.
          </a>
        </p>
        <p>Please consider me as a candidate for your next open full-time position as a Front-End Developer.</p>
        <div className="skills">
          <h4>Skills</h4>
          <p>
            <FontAwesomeIcon icon={faHtml5} className="fa-icon html-icon" />
            Html5
          </p>

          <p>
            <FontAwesomeIcon icon={faCss3} className="fa-icon css-icon" />
            Css3
          </p>

          <p>
            <FontAwesomeIcon icon={faBootstrap} className="fa-icon bootstrap-icon" />
            Bootstrap
          </p>

          <p>
            <FontAwesomeIcon icon={faJs} className="fa-icon js-icon" />
            Javascript
          </p>

          <p>
            <FontAwesomeIcon icon={faReact} className="fa-icon react-icon" />
            React
          </p>

          <p>
            <span className="img-icon">
              <img src={reduxIcon} alt="redux icon" />
            </span>
            Redux
          </p>

          <p>
            <span className="img-icon next-icon">
              <img src={nextIcon} alt="Gatsby" />
            </span>
            Next.js
          </p>

          <p>
            <span className="img-icon">
              <img src={gatsbyIcon} alt="Gatsby" />
            </span>
            Gatsby.js
          </p>

          <p>
            <span className="img-icon">
              <img src={graphQLIcon} alt="Gatsby" />
            </span>
            GrahpQL
          </p>

          <p>
            <FontAwesomeIcon icon={faGit} className="fa-icon" />
            Git
          </p>
        </div>
        <div className="certifications">
          <h4>Certifications</h4>

          <ul>
            {certifications.map((item, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
