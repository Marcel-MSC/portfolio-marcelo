import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, StyledLink, Pill } from '../../styles';
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
                <span>Location: {work.location ?? '—'}</span>
                <span> &sdot; </span>
                <span>
                  From {work.startDate ?? '—'} to {work.isCurrentRole ? 'current' : (work.endDate ?? '—')}
                </span>
              </div>
              {work.summary && <Paragraph>{work.summary}</Paragraph>}
              {Array.isArray(work.highlights) && work.highlights.length > 0 && (
                <div style={{ marginTop: '0.5rem' }}>
                  {work.highlights.map((h, j) => (
                    <Pill key={j}>{h}</Pill>
                  ))}
                </div>
              )}
              {work.url && (
                <StyledLink href={work.url.startsWith('http') ? work.url : `https://${work.url}`} target="_blank" rel="noopener noreferrer">
                  {work.url}
                </StyledLink>
              )}
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
