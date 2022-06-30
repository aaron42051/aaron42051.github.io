import React from 'react';
import styled from 'styled-components';
import IconLinks from './IconLinks';

const AppBody = () => {
  const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
  `;

  const TitleContainer = styled.div`
    width: 800px;
    margin: 16% auto;
    color: white;
  `;

  const StyledTitle = styled.h1`
    font-size: 7rem;
    margin: 1rem 0;
  `;

  return (
    <BodyContainer>
      <TitleContainer>
        <StyledTitle>Aaron Ching</StyledTitle>
        <IconLinks />
        <p>
          I am a Full Stack Developer living in the Los Angeles Area that
          specializes in frontend React development with Node. I am currently
          working for Booz Allen Hamilton on their full stack team. I enjoy
          working on Unity game dev projects on my own time.
        </p>
      </TitleContainer>
    </BodyContainer>
  );
};

AppBody.propTypes = {};

export default AppBody;
