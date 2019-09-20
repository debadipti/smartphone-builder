import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Header>
      <NavWrapper>
        <h3>
          <Link to="/">
            <i className="material-icons">build</i> Smartphone Builder
          </Link>
        </h3>
        <LinkStyle to="/features">
          <i className="material-icons">help</i> What can i do?
        </LinkStyle>
        <LinkStyle to="/wishlist">
          <i className="material-icons">whatshot</i> Wishlist
        </LinkStyle>
        <LinkStyle to="/about">
          <i className="material-icons">info</i> About
        </LinkStyle>
      </NavWrapper>
    </Header>
  );
}

// styled components
const Header = styled.header`
  padding: 15px 10px;
  background-color: #2e7ee0;
  color: white;
  border-bottom: 1px solid #ccc;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
  color: inherit;
  i {
    margin-right: 5px;
  }
`;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  h3 {
    margin: 0;
    flex: 1;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: inherit;
      display: inline-flex;
      align-items: center;
      i {
        margin-right: 10px;
      }
    }
  }
`;
