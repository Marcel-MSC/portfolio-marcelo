import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, StyledLink } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle>
                <br></br>
                <span>Location: {work.location}</span>
                <span> &sdot; </span>
                <span>
                  From {work.startDate} to {work.isCurrentRole ? 'current' : work.endDate }
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
              <StyledLink href={work.url} target="_blank">{work.url}</StyledLink>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;