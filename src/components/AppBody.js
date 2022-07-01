import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const AppBody = () => {
  const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
  `;

  return (
    <BodyContainer>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </BodyContainer>
  );
};

AppBody.propTypes = {};

export default AppBody;
