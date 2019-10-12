import React, { Component } from "react";
import Modal from "./Modal";

export default class BuildPhoneModal extends Component {
  state = {
    phoneData: {}
  };

  handleInputChange = e => {
    let data = this.state.phoneData;
    data[e.target.name] = e.target.value;
    this.setState({ phoneData: data });
  };

  handleFormSubmit = e => {
    console.log("Add: ", this.state);
  };

  render() {
    return (
      <Modal title={this.props.title} onClose={this.props.onClose}>
        <div>
          <div>
            <label htmlFor="brand">Brand</label>
            <select
              name="brand"
              id="brand"
              onChange={e => this.handleInputChange(e)}>
              <option defaultValue disabled>
                --select brand--
              </option>
              <option value="onePlus">OnePlus</option>
              <option value="google">Google</option>
              <option value="samsung">Samsung</option>
              <option value="xioami">Xioami</option>
              <option value="iPhone">iPhone</option>
              <option value="LG">LG</option>
            </select>
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              name="model"
              id="model"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="camera">Rear Camera</label>
            <input
              type="number"
              name="camera"
              id="camera"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="frontCam">Front Camera</label>
            <input
              type="number"
              name="frontCam"
              id="frontCam"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="battery">Battery Size</label>
            <input
              type="number"
              name="battery"
              id="battery"
              maxLength="5"
              onChange={e => this.handleInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="os">Operating System</label>
            <select name="os" id="os" onChange={e => this.handleInputChange(e)}>
              <option defaultValue disabled>
                --select os--
              </option>
              <option value="android">Android</option>
              <option value="ios">iOS</option>
            </select>
          </div>
          <div>
            <label htmlFor="memory">RAM Size</label>
            <select
              name="memory"
              id="memory"
              onChange={e => this.handleInputChange(e)}>
              <option defaultValue disabled>
                --select memory size--
              </option>
              <option value="2">2 GB</option>
              <option value="3">3 GB</option>
              <option value="4">4 GB</option>
              <option value="5">5 GB</option>
              <option value="6">6 GB</option>
              <option value="7">7 GB</option>
              <option value="8">8 GB</option>
              <option value="10">10 GB</option>
              <option value="12">12 GB</option>
            </select>
          </div>
          <div>
            <label htmlFor="internal">Memory Capacity</label>
            <select
              name="internal"
              id="internal"
              onChange={e => this.handleInputChange(e)}>
              <option defaultValue disabled>
                --select memory capacity--
              </option>
              <option value="8">8 GB</option>
              <option value="16">16 GB</option>
              <option value="32">32 GB</option>
              <option value="64">64 GB</option>
              <option value="128">128 GB</option>
              <option value="256">256 GB</option>
              <option value="512">512 GB</option>
            </select>
          </div>
          <div>
            <label htmlFor="screen">Screen Size</label>
            <select
              name="screen"
              id="screen"
              onChange={e => this.handleInputChange(e)}>
              <option defaultValue disabled>
                --select screen size--
              </option>
              <option value="3.6">3.6 inch</option>
              <option value="4.1">4.1 inch</option>
              <option value="4.3">4.3 inch</option>
              <option value="4.8">4.8 inch</option>
              <option value="5.2">5.2 inch</option>
              <option value="5.5">5.5 inch</option>
              <option value="5.9">5.9 inch</option>
              <option value="6.1">6.1 inch</option>
              <option value="6.6">6.6 inch</option>
              <option value="7.1">7.1 inch</option>
              <option value="7.3">7.3 inch</option>
              <option value="7.5">7.5 inch</option>
              <option value="7.9">7.9 inch</option>
              <option value="8.2">8.2 inch</option>
            </select>
          </div>
          <div>
            <label htmlFor="chipset">Chipset</label>
            <select
              name="chipset"
              id="chipset"
              onChange={e => this.handleInputChange(e)}>
              <option defaultValue disabled>
                --select chipset--
              </option>
              <option value="snapdragon 336">Snapdragon 336</option>
              <option value="snapdragon 480">Snapdragon 480</option>
              <option value="snapdragon 630">Snapdragon 630</option>
              <option value="snapdragon 760">Snapdragon 760</option>
              <option value="snapdragon 836">Snapdragon 836</option>
              <option value="snapdragon 845">Snapdragon 845</option>
              <option value="snapdragon 855">Snapdragon 855</option>
            </select>
          </div>
          <button onClick={this.handleFormSubmit}>Add</button>
        </div>
      </Modal>
    );
  }
}
