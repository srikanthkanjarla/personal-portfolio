/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './projectCard.css';

const Ribbon = props => {
  const { githubURL } = props;
  return (
    <div className="ribbon-wrapper">
      <div className="ribbon">
        <a href={githubURL} target="_blank" title="github source" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Source
        </a>
      </div>
    </div>
  );
};

const ButtonLink = props => {
  const { liveURL } = props;
  return (
    <a href={liveURL} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLink} style={{ marginRight: '0.5em', fontSize: '0.8em' }} />
      Visit Live
    </a>
  );
};

const ProjectLabels = props => {
  const { labels } = props;
  return (
    <p className="project-labels">
      {labels.map((label, index) => (
        <span key={index}>{label}</span>
      ))}
    </p>
  );
};
const ProjectCard = props => {
  const { title, description, image, liveURL, githubURL, labels } = props;
  return (
    <div className="card-wrapper">
      <Ribbon githubURL={githubURL} />
      <div className="thumbnail-img">
        <Image fluid={image} alt={title} />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-info">{description}</p>
        <ButtonLink liveURL={liveURL} />
        <ProjectLabels labels={labels} />
      </div>
    </div>
  );
};

export default ProjectCard;
