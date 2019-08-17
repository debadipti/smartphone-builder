import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Header>
      <h1>Smartphone Builder</h1>
      <span>
        <i className="material-icons">info</i> About
      </span>
    </Header>
  );
}

const Header = styled.header`
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  h1 {
    margin: 0;
    flex: 1;
  }
  span {
    display: inline-flex;
    align-items: center;
    i {
      margin-right: 10px;
    }
  }
`;
