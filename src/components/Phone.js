import React from "react";
import styled from "styled-components";

export default function Phone(props) {
  return (
    <StyledPhone>
      <h3>
        {props.item.brand} {props.item.model}
      </h3>
      <span>
        <i className="material-icons">memory</i> {props.item.chipset}
      </span>
      <span>
        <i className="material-icons">stay_primary_portrait</i>{" "}
        {props.item.screen} inch, {props.item.resolution}
      </span>
      <span>
        <i className="material-icons">sd_card</i> {props.item.memory}GB RAM,{" "}
        {props.item.internal}GB Internal
      </span>
      <span>
        <i className="material-icons">camera_front</i> {props.item.internal}MP
        Front Camera
      </span>
      <span>
        <i className="material-icons">camera_front</i> {props.item.frontCam}MP
        Front Camera
      </span>
    </StyledPhone>
  );
}

const StyledPhone = styled.div`
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
  span {
    display: flex;
    margin: 0.6rem 0;
    align-items: center;
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 200;
    i {
      margin-right: 10px;
    }
  }
`;
