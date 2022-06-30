import React from 'react';
import styled from 'styled-components';
import LinkedInWhite from '../images/LinkedInWhite.png';
import GithubWhite from '../images/GithubWhite.png';

const StyledIconBar = styled.div`
  margin: 1rem 0;
`;

const StyledImage = styled.img`
  opacity: 0.5;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
  width: 40px;
  margin: 0 15px 0 0;
`;

const IconLinks = () => {
  return (
    <StyledIconBar>
      <a
        href="https://www.linkedin.com/in/aaron-ching-959496104/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledImage src={LinkedInWhite} />
      </a>
      <a href="https://github.com/aaron42051" target="_blank" rel="noreferrer">
        <StyledImage src={GithubWhite} />
      </a>
    </StyledIconBar>
  );
};

export default IconLinks;
