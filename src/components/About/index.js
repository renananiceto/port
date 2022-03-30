import React from "react";
import * as S from "./styles";
import { Input } from "../input";

export const About = (props) => {
  return (
    <S.Cont {...props}>
      <S.Wrapper>
        <h1>
          Sobre <span>mim</span>
        </h1>
        <S.BoxAddress>
          <S.Sobre>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in
              eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
              nisl.Delegadis gente finis, bibendum egestas augue arcu ut
              est.Interagi no mé, cursus quis, vehicula ac nisi.Manduma
              pindureta quium dia nois paga. In elementis mé pra quem é
              amistosis quis leo.Cevadis im ampola pa arma uma pindureta.Tá
              deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.A
              ordem dos tratores não altera o pão duris.
            </p>
          </S.Sobre>
          <S.Address>
            <p>
              <span>Idade</span>: 27 anos
            </p>
            <p>
              <span>Residência</span>: Brasil
            </p>
            <p>
              <span>e-mail</span>: renan.a.ferreira94@gmail.com
            </p>
            <p>
              <span>Telefone</span>: (21) 96566-0929
            </p>
          </S.Address>
        </S.BoxAddress>
        <div>
          <h2>
            O que <span>eu faço</span>
          </h2>
          <S.Box>
            <S.BoxParagraph>
              <S.Cpt />
              <S.Paragraph>Desenvolvimento de sites</S.Paragraph>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num
                copo é motivis de denguis.Paisis, filhis, espiritis
                santis.Interagi no mé, cursus quis, vehicula ac nisi.Quem num
                gosta di mé, boa gentis num é.
              </p>
            </S.BoxParagraph>
            <S.BoxParagraph>
              <S.Cpt2 />
              <S.Paragraph>Montagem e manutenção de micro</S.Paragraph>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num
                copo é motivis de denguis.Paisis, filhis, espiritis
                santis.Interagi no mé, cursus quis, vehicula ac nisi.Quem num
                gosta di mé, boa gentis num é.
              </p>
            </S.BoxParagraph>
          </S.Box>
          <S.Box>
            <S.BoxParagraph>
              <S.Cpt3 />
              <S.Paragraph>Professor voluntario</S.Paragraph>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num
                copo é motivis de denguis.Paisis, filhis, espiritis
                santis.Interagi no mé, cursus quis, vehicula ac nisi.Quem num
                gosta di mé, boa gentis num é.
              </p>
            </S.BoxParagraph>

          </S.Box>
        </div>
      </S.Wrapper>
    </S.Cont>
  );
};
