import styled from 'styled-components';

export const DivDownloadLanguage = styled.div`
    max-width: min-content;
`;

export const DownloadLanguage = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: white;
  margin: 2px 2px 2px; 
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
`;