import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./About";
import PhoneList from "./components/PhoneList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <MainWrapper>
      <Router>
        <Navbar />
        <Route
          exact
          path="/"
          render={props => <PhoneList {...props} title={"All Phones"} />}
        />
        <Route
          exact
          path="/wishlist"
          render={props => (
            <PhoneList {...props} title={"My Wishlist"} wishlist />
          )}
        />
        <Route path="/about" component={About} />
      </Router>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
