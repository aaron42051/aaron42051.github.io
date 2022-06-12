import './App.css';
import NavBar from './components/NavBar';
import AppBody from './components/AppBody';
import styled from 'styled-components';
import React from 'react';

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
      <NavBar />
      <AppBody />
    </Container>
  );
}

export default App;
