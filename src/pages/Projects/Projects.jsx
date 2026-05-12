import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill, StyledLink } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              {project.description ? (
                <p>Description: {project.description}</p>
              ) : null}
              <p>
                Github:{" "}
                <StyledLink href={project.githubUrl} target="_blank">
                  {project.githubUrl}
                </StyledLink>
              </p>
              {project.website ? (
                <p>
                  Website:{" "}
                  <StyledLink href={project.website} target="_blank">
                    {project.website}
                  </StyledLink>
                </p>
              ) : null}
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
