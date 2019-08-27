import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Header>
      <h3>
        <Link to="/">
          <i className="material-icons">build</i> Smartphone Builder
        </Link>
      </h3>
      <LinkStyle to="/wishlist">
        <i className="material-icons">whatshot</i> Wishlist
      </LinkStyle>
      <LinkStyle to="/about">
        <i className="material-icons">info</i> About
      </LinkStyle>
    </Header>
  );
}

const Header = styled.header`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  h3 {
    margin: 0;
    flex: 1;
    a {
      text-decoration: none;
    }
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
  i {
    margin-right: 5px;
  }
`;
