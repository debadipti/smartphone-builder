import React, { Component } from "react";

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      open: false
    };
  }

  componentWillMount() {
    fetch("../data/data.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ list: json });
      });
  }

  render() {
    return <div>List of phones</div>;
  }
}
