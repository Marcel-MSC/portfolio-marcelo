import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);

  &::before {
    content: '// ';
    opacity: 0.7;
  }
`;

export const StyledLink = styled.a`
  color: var(--color-accent);
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  line-height: 1.7;
  color: var(--color-fg);
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.35rem 0.75rem;
  background-color: var(--bg-accent-soft);
  color: var(--color-accent);
  border: 1px solid var(--color-pill-border);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
`;
