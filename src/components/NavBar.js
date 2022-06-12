import React from "react";
import styled from "styled-components";

const StyledNavWrapper = styled.div`
  padding: 0px 25px;
`;

const NavBar = () => {
  return (
    <nav>
      <StyledNavWrapper class="nav-wrapper">
        <a href="#" class="brand-logo">
          {" "}
          Aaron Ching{" "}
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="a">Experience</a>
          </li>
          <li>
            <a href="a">Education</a>
          </li>
          <li>
            <a href="a">Portfolio</a>
          </li>
        </ul>
      </StyledNavWrapper>
    </nav>
  );
};

export default NavBar;
