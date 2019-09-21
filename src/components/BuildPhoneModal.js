import React, { Component } from "react";
import Modal from "./Modal";

export default class BuildPhoneModal extends Component {
  render() {
    return (
      <Modal title={this.props.title} onClose={this.props.onClose}>
        <h1>add you dream phone here</h1>
      </Modal>
    );
  }
}
