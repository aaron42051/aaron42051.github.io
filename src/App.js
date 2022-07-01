import './App.css';
import NavBar from './components/NavBar';
import AppBody from './components/AppBody';
import styled from 'styled-components';
import React from 'react';
import { BACKGROUND_PRIMARY, BACKGROUND_SECONDARY } from './constants';
import { BrowserRouter as Router } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    ${BACKGROUND_PRIMARY},
    ${BACKGROUND_SECONDARY}
  );
`;

/**
 * @override
 */
function App() {
  return (
    <Router>
      <Background>
        <Container>
          <NavBar />
          <AppBody />
        </Container>
      </Background>
    </Router>
  );
}

export default App;
