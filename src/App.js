import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <MainWrapper>
      <Navbar />
      <PhoneList />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
