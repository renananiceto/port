import React from "react";

// Styles
import * as S from "./styles";

//Icons
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";

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
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/renan.ferreira.965"
              target="_blank"
            >
              <Facebook />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/renan-aniceto-07b08b20b/"
              target="_blank"
            >
              <Twitter />
            </a>
          </div>
        </S.BoxRedes>
      </S.Wrapper>
    </S.Container>
  );
}
