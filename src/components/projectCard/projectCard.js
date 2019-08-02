/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'gatsby-image';
import './projectCard.css';

const ProjectCard = props => {
  const { title, description, image, livePath, sourcePath, labels } = props;
  return (
    <div className="card-wrapper">
      <div className="ribbon-wrapper">
        <div className="ribbon">
          <a href={sourcePath} target="_blank" title="github source" rel="noopener noreferrer">
            <i className="fab fa-github" />
            &nbsp;Source
          </a>
        </div>
      </div>
      <div className="thumbnail-img">
        {/* <img src={image} alt={title}/> */}
        <Image fluid={image} alt={title} />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-info">{description}</p>
        <a href={livePath} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-external-link-square-alt" />
          &nbsp;&nbsp;Visit site
        </a>
        <p className="project-labels">
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
