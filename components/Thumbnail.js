import styled from "styled-components";
import React from "react";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  padding: 5px 5px 50px 5px;
  justify-content: flex-start;
  flex: 0 1 18%;
  cursor: pointer;
`;

export default function Thumbnail(props) {
  return (
    <Wrapper>
      <Image
        width={300}
        height={300}
        src={props.image.src.medium}
        alt={props.image.url}
        onClick={props.handleClick}
        id={props.image.id}
      />
      {props.showPopup && props.selected == props.image.id ? (
        <div>
          Photographer: {props.image.photographer}
          <br />
          <a href={props.image.url}>View Source</a>
        </div>
      ) : (
        <div>
          &nbsp;
          <br />
          &nbsp;
          <br />
          &nbsp;
        </div>
      )}
    </Wrapper>
  );
}
