import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 14vw;
  margin-right: 1rem;
  border: 2px solid rgb(46, 204, 64);
  border-radius: 10px;
  border: 1px solid green;
  height: 35vh;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  max-width: max-content;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid rgba(46, 204, 64, 0.3);
  border-radius: 10px;
  background-color: black;
  transition: background-color 250ms ease;
  &:hover {
    background-color: rgba(46, 204, 64, 0.3);
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;