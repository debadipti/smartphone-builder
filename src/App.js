import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import PhoneList from "./components/PhoneList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <MainWrapper>
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
        <Route path="/features" component={Features} />
      </MainWrapper>
    </Router>
  );
}

export default App;

// styled components
const MainWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 3rem auto;
  padding-left: 15px;
  padding-right: 15px;
`;
