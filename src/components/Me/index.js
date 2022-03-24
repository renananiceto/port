import React from "react";

// Styles
import * as S from "./styles";

//Icons
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";


import mamaco from "../../images/mamaco.jpg";

export default function index() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxFigure>
          <img src={mamaco} alt="#" />
        </S.BoxFigure>
        <S.BoxName>
          <h2>Renan Aniceto</h2>
          <p>Dev Front-end</p>
        </S.BoxName>
        <S.BoxRedes>
          <div>
            <a
              href="https://www.linkedin.com/in/renan-aniceto-07b08b20b/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/renan-aniceto-07b08b20b/"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </S.BoxRedes>
      </S.Wrapper>
    </S.Container>
  );
}
