import React, { useState } from "react";
import * as S from "./styles";

export const Teste = () => {
  const [change, setChange] = useState(false);

  const handleClick = () => {
    setChange(!change);
  };
  console.log(typeof change);

  return (
    <S.Container primary={change}>
      <button onClick={() => handleClick()}>Renan</button>
      <p>{change}</p>
      <S.FlipContainer>
        <S.Flipper>
          <S.Front>
            <img
              src="https://www.dicaspetz.com.br/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg"
              alt=""
            />
          </S.Front>
          <S.Back>
            <img
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/109D8/production/_95765086_cat-1285634_1920.png"
              alt=""
            />
          </S.Back>
        </S.Flipper>
      </S.FlipContainer>
    </S.Container>
  );
};
