import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  const StyledNavWrapper = styled.div`
    padding: 0px 25px;
  `;

  const StyledNav = styled.nav`
    background-color: inherit;
  `;

  const StyledNavItems = styled.a`
    font-size: 18px;
  `;

  return (
    <StyledNav>
      <StyledNavWrapper class="nav-wrapper">
        <StyledNavItems href="#" className="brand-logo">
          {' '}
          AC
        </StyledNavItems>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <StyledNavItems href="a">
              <b>Experience</b>
            </StyledNavItems>
          </li>
          <li>
            <StyledNavItems href="a">
              <b>Education</b>
            </StyledNavItems>
          </li>
          <li>
            <StyledNavItems href="a">
              <b>Portfolio</b>
            </StyledNavItems>
          </li>
        </ul>
      </StyledNavWrapper>
    </StyledNav>
  );
};

NavBar.propTypes = {};

export default NavBar;
