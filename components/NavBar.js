import styled from "styled-components";
import React from "react";

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-basis: 1;
  width: 100%;
  background-color: lightblue;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  align-items: center;
  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  order: 2;
  flex: 1 1 60%;
  margin-top: 10px;
`;

const StyledInput = styled.input`
  background: white;
  color: black;
  cursor: text;
  width: 40vw;
  height: 35px;
  border-color: transparent;
  outline: none;
  transition: 0.15s;
  text-align: center;
  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const TitleText = styled.h2`
  margin: 20px 0 20px 20px;
`;

const StyledButton = styled.button`
  background: #334f79;
  border: 1px solid #334f79;
  box-sizing: border-box;
  margin-left: 10px;
  padding: 5px;
  font-size: 14px;
  color: whitesmoke;
  height: 40px;
  cursor: pointer;
`;

export default function NavBar(props) {
  return (
    <TopBar>
      <TitleText>Pexels CurateApp</TitleText>
      <StyledFormWrapper>
        <form onSubmit={props.handleSubmit}>
          <StyledInput
            onChange={(e) => {
              props.setQuery(e.target.value);
            }}
            type="text"
            placeholder="Find photos of..."
            value={props.query}
          ></StyledInput>
          <StyledButton type="submit">Search</StyledButton>
        </form>
      </StyledFormWrapper>
    </TopBar>
  );
}
