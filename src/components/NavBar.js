import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const StyledNavWrapper = styled.div`
    padding: 0px 25px;
  `;

  const StyledNav = styled.nav`
    background-color: inherit;
  `;

  const StyledNavItems = styled(Link)`
    font-size: 18px;
    cursor: pointer;
  `;

  return (
    <StyledNav>
      <StyledNavWrapper class="nav-wrapper">
        <StyledNavItems to="/" className="brand-logo">
          AC
        </StyledNavItems>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <StyledNavItems to="/about">
              <b>About</b>
            </StyledNavItems>
          </li>
          <li>
            <StyledNavItems to="/skills">
              <b>Skills & Experience</b>
            </StyledNavItems>
          </li>
          <li>
            <StyledNavItems to="/projects">
              <b>Projects</b>
            </StyledNavItems>
          </li>
        </ul>
      </StyledNavWrapper>
    </StyledNav>
  );
};

NavBar.propTypes = {};

export default NavBar;
