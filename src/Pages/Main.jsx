import React, { useState } from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import background from "./img/background.jpeg";
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
      <BgImage>
        <MainBox>
          <Container>{selectButtons}</Container>
          {option && selectComponent[option]}
        </MainBox>
      </BgImage>
    </>
  );
};
const BgImage = styled.div`
  width: 100wh;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
`;
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
  margin: 1rem;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
  &:focus {
    filter: brightness(90%);
    background-color: rgba(99, 119, 151, 0.7);
    color: white;
  }
`;

const Content = styled.div`
  display: flex;
  width: 30rem;
  height: 10rem;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export default Main;
