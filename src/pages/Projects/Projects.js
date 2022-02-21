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
          {console.log(user.projects)}
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <StyledLink href={project.githubUrl} target="_blank">{project.githubUrl}</StyledLink>
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