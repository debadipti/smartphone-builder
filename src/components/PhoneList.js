import React, { Component, Fragment } from "react";
import Phone from "./Phone";
import styled from "styled-components";
import Modal from "./Modal";

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedPhone: {},
      detailsModal: false,
      addModal: false
    };
  }

  componentDidMount() {
    if (this.props.wishlist) {
      console.log("handle favorites");
    } else {
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
  }

  handlePhoneDetails = item => {
    this.setState({ selectedPhone: item }, () => {
      this.setState({ detailsModal: true });
    });
  };

  render() {
    return (
      <Fragment>
        <PhoneListStyle>
          <h2>{this.props.title}</h2>
          <List>
            {this.state.list.map(item => {
              return (
                <Phone
                  key={item.id}
                  item={item}
                  onPhoneClick={() => {
                    this.handlePhoneDetails(item);
                  }}
                />
              );
            })}
            <AddButton
              onClick={() => {
                this.setState({ addModal: true });
              }}>
              <i className="material-icons">add_circle_outline</i>
            </AddButton>
          </List>
        </PhoneListStyle>
        {this.state.detailsModal && (
          <Modal
            title="Phone Details"
            onClose={() => {
              this.setState({ detailsModal: false });
            }}>
            {this.state.selectedPhone.brand}
          </Modal>
        )}
        {this.state.addModal && (
          <Modal
            title="Build Phone"
            onClose={() => {
              this.setState({ addModal: false });
            }}>
            <h1>Add Phone</h1>
          </Modal>
        )}
      </Fragment>
    );
  }
}

// styled components
const PhoneListStyle = styled.div`
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
    background: #fafafa;
  }
  i {
    margin: auto;
    font-size: 3rem;
  }
`;
