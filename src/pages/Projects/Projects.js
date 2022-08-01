import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill, StyledLink } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {/* {console.log(user.projects)} */}
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>Summary: {project.summary}</p>
              <p>Description: {project.description}</p>
              <StyledLink href={project.githubUrl} target="_blank">{project.githubUrl}</StyledLink>
              <br></br>
              {project.website ? <StyledLink href={project.website} target="_blank">{project.website}</StyledLink> : null}
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;