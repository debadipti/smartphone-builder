import React, { Component } from "react";
import Phone from "./Phone";
import styled from "styled-components";

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      open: false
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/debadipti/smartphone-builder/master/src/data/data.json"
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ list: json });
      });
  }

  render() {
    return (
      <PhoneListStyle>
        <h2>List of phones</h2>
        <List>
          {this.state.list.map(item => {
            return <Phone key={item.id} item={item} />;
          })}
          <AddButton>
            <i className="material-icons">add_circle_outline</i>
          </AddButton>
        </List>
      </PhoneListStyle>
    );
  }
}

const PhoneListStyle = styled.div`
  margin: 3rem 0;
  h2 {
    margin: 1rem;
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 270px;
    height: 320px;
    box-sizing: border-box;
  }
`;

const AddButton = styled.div`
  background-color: #fff;
  border: 2px dashed #ccc;
  border-radius: 4px;
  display: flex;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  i {
    margin: auto;
    font-size: 3rem;
  }
`;
