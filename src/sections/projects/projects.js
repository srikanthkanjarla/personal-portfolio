import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionLayout from '../../components/section/section';
import ProjectCard from '../../components/projectCard/projectCard';
import './projects.css';

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allProjectsJson(limit: 6) {
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
        }
      }
    `
  );
  return (
    <SectionLayout id="portfolio" title="My Recent Work">
      <p>Take a look at some of my learning projects</p>
      <div className="projects-container">
        {data.allProjectsJson.edges.map(({ node }) => (
          <ProjectCard
            title={node.title}
            description={node.description}
            image={node.image.childImageSharp.fluid}
            livePath={node.livePath}
            sourcePath={node.sourcePath}
            labels={node.labels}
            key={node.id}
          />
        ))}
      </div>
      <button type="button">Load more &dqrr;</button>
    </SectionLayout>
  );
};

export default Projects;
