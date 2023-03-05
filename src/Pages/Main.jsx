import React, { useState } from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
const Main = () => {
  const initialState = {
    option: "first",
  };
  const [option, setOption] = useState(initialState);
  const handleClickButton = (e) => {
    const { name } = e.target;
    setOption(name);
  };
  const selectComponent = {
    first: <First />,
    second: <Second />,
    third: <Third />,
  };
  const buttonData = [
    {
      name: "first",
      id: "sim1",
      text: "심플",
    },
    {
      name: "second",
      id: "girl1",
      text: "소녀소녀",
    },
    {
      name: "third",
      id: "char1",
      text: "캐릭터",
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

export default Main;
