import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AppBody = ({ backgroundColor }) => {
  const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${backgroundColor};
  `;

  const TitleContainer = styled.div`
    width: 800px;
    margin: 16% auto;
    color: white;
  `;

  return (
    <BodyContainer>
      <TitleContainer>
        <h1>Aaron Ching</h1>
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

AppBody.propTypes = {
  backgroundColor: PropTypes.string,
};

export default AppBody;
