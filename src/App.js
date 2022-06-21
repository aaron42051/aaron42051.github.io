import './App.css';
import NavBar from './components/NavBar';
import AppBody from './components/AppBody';
import styled from 'styled-components';
import React from 'react';
import { BACKGROUND_COLOR } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

/**
 * @override
 */
function App() {
  return (
    <Container>
      <NavBar backgroundColor={BACKGROUND_COLOR} />
      <AppBody backgroundColor={BACKGROUND_COLOR} />
    </Container>
  );
}

export default App;
