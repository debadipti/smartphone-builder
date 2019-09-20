import React from "react";
import styled from "styled-components";

export default function Phone(props) {
  return (
    <StyledPhone onClick={() => props.onPhoneClick()}>
      <PhoneTitle>
        {props.item.brand} {props.item.model}{" "}
        <Rating>
          <i className="material-icons">star</i>
          {props.item.rating}
        </Rating>
      </PhoneTitle>
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
        <i className="material-icons">camera</i> {props.item.camera[0]}MP Main
        Camera
      </span>
      <span>
        <i className="material-icons">camera_front</i> {props.item.frontCam}MP
        Front Camera
      </span>
    </StyledPhone>
  );
}

// styled components
const StyledPhone = styled.div`
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
  :hover {
    background-color: #fafafa;
  }
  > span {
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

const PhoneTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled.span`
  background-color: darkgray;
  color: white;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  i {
    margin-right: 4px;
    font-size: 16px;
  }
`;
