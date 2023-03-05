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
    return girls.map((data, idx) => <img alt={idx} key={idx} src={data} />);
  };

  const LComponent = () => {
    return girll.map((data, idx) => <img alt={idx} key={idx} src={data} />);
  };

  const OComponent = () => {
    return girlo.map((data, idx) => <img alt={idx} key={idx} src={data} />);
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
      <Container>{selectButtons}</Container>
      {option && <Content>{selectComponent[option]}</Content>}
    </>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  justify-direction: center;
  margin: 0 auto;
`;

const DefaultButton = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 0.85rem;
  text-align: center;
  cursor: pointer;
  background-color: rgb(139, 188, 228);
  color: #333333;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
  &:focus {
    filter: brightness(90%);
    color: blue;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export default Second;
