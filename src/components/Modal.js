import React from "react";
import styled from "styled-components";

export default function Modal(props) {
  return (
    <ModalBack>
      <ModalWrapper>
        <ModalHead>
          <h2>{props.title}</h2>
          <span
            className="material-icons"
            onClick={props.onClose}
            title="close">
            close
          </span>
        </ModalHead>
        {props.children}
      </ModalWrapper>
    </ModalBack>
  );
}

// styled components
const ModalBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 600px;
  min-height: 200px;
  padding: 14px;
  background-color: white;
  z-index: 6;
`;

const ModalHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    margin: 0;
    flex: 1;
  }
  span {
    cursor: pointer;
  }
`;
