import React, { useState } from "react";
import styled from "styled-components";
import girls1 from "./img/girls1.png";
import girls2 from "./img/girls2.png";
import girls3 from "./img/girls3.png";
import girls4 from "./img/girls4.png";
import girls5 from "./img/girls5.png";

import girls6 from "./img/girls6.png";
import girls7 from "./img/girls7.png";

import girlo1 from "./img/girlo1.png";
import girlo2 from "./img/girlo2.png";
import girlo3 from "./img/girlo3.png";
import girlo4 from "./img/girlo4.png";
import girlo5 from "./img/girlo5.png";
const Second = () => {
  const initialState = {
    option: "first",
  };
  const [option, setOption] = useState(initialState);

  const handleClickButton = (e) => {
    const { name } = e.target;
    setOption(name);
  };
  const girls = [girls1, girls2, girls3, girls4, girls5];
  const girll = [girls6, girls7];
  const girlo = [girlo1, girlo2, girlo3, girlo4, girlo5];
  const SComponent = () => {
    return girls.map((data, idx) => (
      <Content>
        <img alt={idx} key={idx} src={data} />
      </Content>
    ));
  };

  const LComponent = () => {
    return girll.map((data, idx) => (
      <Content>
        <img alt={idx} key={idx} src={data} />
      </Content>
    ));
  };

  const OComponent = () => {
    return girlo.map((data, idx) => (
      <Content>
        <img alt={idx} key={idx} src={data} />
      </Content>
    ));
  };

  const selectComponent = {
    first: <SComponent />,
    second: <LComponent />,
    third: <OComponent />,
  };
  const buttonData = [
    {
      name: "first",
      id: "gs",
      text: "반팔",
    },
    {
      name: "second",
      id: "gl",
      text: "긴팔",
    },
    {
      name: "third",
      id: "go",
      text: "원피스",
    },
  ];
  const selectButtons = buttonData.map((data) => (
    <DefaultButton onClick={handleClickButton} name={data.name} key={data.id}>
      {data.text}
    </DefaultButton>
  ));
  return (
    <>
      <InnerBox>
        <Container>{selectButtons}</Container>
        <InnerContainer>{option && selectComponent[option]} </InnerContainer>
      </InnerBox>
    </>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 30rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const DefaultButton = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 0.85rem;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  color: #333333;
  margin: 2rem 0.8rem 2rem 0.8rem;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
  &:focus {
    filter: brightness(90%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.348);
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  margin: 2rem;
  img {
    width: 10rem;
    height: 11rem;
    object-fit: cover;
  }
`;
export default Second;
