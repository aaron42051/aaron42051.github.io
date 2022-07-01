import React from 'react';
import styled from 'styled-components';
import IconLinks from './IconLinks';

export const TitleContainer = styled.div`
  width: 800px;
  margin: 16% auto;
  color: white;
`;

export const StyledTitle = styled.h1`
  font-size: 7rem;
  margin: 1rem 0;
`;

const Home = () => {
  return (
    <TitleContainer>
      <StyledTitle>Aaron Ching</StyledTitle>
      <IconLinks />
    </TitleContainer>
  );
};

export default Home;
