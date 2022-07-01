import React from 'react';
// import styled from 'styled-components';
import { TitleContainer, StyledTitle } from './Home';

const About = () => {
  return (
    <TitleContainer>
      <StyledTitle>About Me</StyledTitle>
      <p>
        I am a Full Stack Developer living in the Los Angeles Area that
        specializes in frontend React development with Node. I am currently
        working for Booz Allen Hamilton on their full stack team. I enjoy
        working on Unity game dev projects on my own time.
      </p>
    </TitleContainer>
  );
};

export default About;
