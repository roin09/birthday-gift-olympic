import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import background from "./img/background.jpeg";
import JSConfetti from "js-confetti";
const Main = () => {
  const jsConfetti = new JSConfetti();
  const [option, setOption] = useState(null);
  const [show, setShow] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  const handleClickButton = (e) => {
    setShowConfetti(false);

    const { name } = e.target;
    if (option !== name) {
      setOption(name);

      setShow(true);
    } else {
      setOption(name);

      setShow((prev) => !prev);
    }
  };
  const startConfetti = setInterval(() => {
    if (showConfetti) {
      jsConfetti.addConfetti({
        emojis: ["🎉", "✨", "💫", "🌸"],
      });
    }
  }, 2500);
  setTimeout(() => {
    clearInterval(startConfetti);
  }, 5000);
  const selectComponent = {
    first: <First />,
    second: <Second />,
    third: <Third />,
  };
  const buttonData = [
    {
      name: "first",
      id: "sim1",
      text: "Simple",
    },
    {
      name: "second",
      id: "girl1",
      text: "Girlish",
    },
    {
      name: "third",
      id: "char1",
      text: "Character",
    },
  ];
  const selectButtons = buttonData.map((data) => (
    <DefaultButton onClick={handleClickButton} name={data.name} key={data.id}>
      {data.text}
    </DefaultButton>
  ));
  useEffect(() => {
    if (show === false) {
      setOption(null);
    }
  }, [show]);
  return (
    <>
      <BgImage>
        <MainBox>
          <Container>{selectButtons}</Container>
          {show === true ? selectComponent[option] : null}
        </MainBox>
      </BgImage>
    </>
  );
};
const BgImage = styled.div`
  width: 100wh;
  height: calc(var(--vh, 1vh) * 100);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 30rem;
  height: 7rem;
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
    filter: brightness(90%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  &:focus {
    filter: brightness(90%);
    background-color: rgba(0, 0, 0, 0.5);
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
