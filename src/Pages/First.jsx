import React, { useState } from "react";
import styled from "styled-components";

import simplel1 from "./img/simplel1.png";
import simplel2 from "./img/simplel2.png";
import simplel3 from "./img/simplel3.png";
import simplel4 from "./img/simplel4.png";
import simplel5 from "./img/simplel5.png";
import simplel6 from "./img/simplel6.png";
import simplel7 from "./img/simplel7.png";
import simpleo2 from "./img/simpleo2.png";
import simples1 from "./img/simples1.png";

const First = () => {
  const initialState = {
    option: "first",
  };
  const [option, setOption] = useState(initialState);
  const handleClickButton = (e) => {
    const { name } = e.target;
    setOption(name);
  };
  // const dataList = {
  //   simples: ["simples1"],
  //   simplel: [
  //     "simplel1",
  //     "simplel2",
  //     "simplel3",
  //     "simplel4",
  //     "simplel5",
  //     "simplel6",
  //     "simplel7",
  //   ],
  //   simpleo: ["simpleo2"],
  //   girls: ["girls1", "girls2", "girls3", "girls4", "girls5"],
  //   girll: ["girls6", "girls7"],
  //   girlo: ["girlo1", "girlo2", "girlo3", "girlo4", "girlo5"],
  //   char: ["char1", "char2", "char3"],
  // };
  const simples = [simples1];
  const simplel = [
    simplel1,
    simplel2,
    simplel3,
    simplel4,
    simplel5,
    simplel6,
    simplel7,
  ];
  const simpleo = [simpleo2];
  const SComponent = () => {
    return simples.map((data, idx) => (
      <Content>
        <img alt={idx} key={idx} src={data} />
      </Content>
    ));
  };

  const LComponent = () => {
    return simplel.map((data, idx) => (
      <Content>
        <img alt={idx} key={idx} src={data} />
      </Content>
    ));
  };

  const OComponent = () => {
    return simpleo.map((data, idx) => (
      <Content>
        {" "}
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
      id: "f",
      text: "반팔",
    },
    {
      name: "second",
      id: "s",
      text: "긴팔",
    },
    {
      name: "third",
      id: "o",
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
        <InnerContainer>{option && selectComponent[option]}</InnerContainer>
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
  margin: 1rem;
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

export default First;
