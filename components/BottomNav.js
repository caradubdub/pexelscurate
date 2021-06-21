import styled from "styled-components";
import React from "react";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30vw;
`;

export default function BottomNav(props) {
  return (
    <PageRow className="row">
      <FontAwesomeIcon
        className="back"
        style={{ cursor: "pointer" }}
        onClick={props.handleBack}
        icon={faArrowLeft}
      />
      {props.page}
      <FontAwesomeIcon
        className="forward"
        style={{ cursor: "pointer" }}
        onClick={props.handleForward}
        icon={faArrowRight}
      />
    </PageRow>
  );
}
