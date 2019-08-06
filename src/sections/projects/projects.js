import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import SectionLayout from '../../components/section/section';
import ProjectCard from '../../components/projectCard/projectCard';
import './projects.css';

const Projects = () => {
  const [currentCount, setCurrentCount] = useState(6);

  const data = useStaticQuery(
    graphql`
      query allProjects {
        allProjectsJson {
          edges {
            node {
              id
              title
              description
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              livePath
              sourcePath
              labels
            }
          }
          totalCount
        }
      }
    `
  );

  const projectsCount = data.allProjectsJson.totalCount;
  const allProjects = data.allProjectsJson.edges;
  const projects = [];
  for (let i = 0; i < currentCount; i += 1) {
    projects.push(allProjects[i]);
  }

  const handleLoadMore = () => {
    const count = 6;
    if (currentCount + count < projectsCount) {
      setCurrentCount(currentCount + count);
    } else {
      setCurrentCount(projectsCount);
    }
  };

  return (
    <SectionLayout id="portfolio" title="My Recent Work">
      <p>Take a look at some of my learning projects</p>
      <div className="projects-container">
        {projects.map(({ node }) => (
          <ProjectCard
            title={node.title}
            description={node.description}
            image={node.image.childImageSharp.fluid}
            liveURL={node.livePath}
            githubURL={node.sourcePath}
            labels={node.labels}
            key={node.id}
          />
        ))}
      </div>
      {currentCount < projectsCount ? (
        <button type="button" className="load-more-btn" onClick={handleLoadMore}>
          Load more <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '0.5em' }} />
        </button>
      ) : null}
    </SectionLayout>
  );
};

export default Projects;
