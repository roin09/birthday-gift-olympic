import { useState } from "react";
import styled from "styled-components";
import { dataList } from "../Datalist";
import char1 from "./img/char1.png";
import char2 from "./img/char2.png";
import char3 from "./img/char3.png";
const Third = () => {
  const initialState = {
    option: "second",
  };
  const [option, setOption] = useState(initialState);
  const handleClickButton = (e) => {
    const { name } = e.target;
    setOption(name);
  };
  const char = [char1, char2, char3];
  const LComponent = () => {
    return char.map((data, idx) => (
      <Content>
        <img alt={idx} key={idx} src={data} />
      </Content>
    ));
  };
  const selectComponent = {
    second: <LComponent />,
  };
  const buttonData = [
    {
      name: "second",
      id: "c",
      text: "긴팔",
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

export default Third;
