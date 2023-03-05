import React, { useState } from "react";

const First = () => {
  const [option, setOption] = useState;
  const handleClickButton = (e) => {
    const { value } = e.target;
    setOption(value);
  };
  const selectComponent = {
    first: <First />,
    second: <Second />,
    third: <Third />,
  };
  const buttonData = [
    {
      name: "first",
      id: 1,
      text: "심플",
    },
    {
      name: "second",
      id: 2,
      text: "소녀소녀",
    },
    {
      name: "third",
      id: 3,
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
export default Main;
