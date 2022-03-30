import React from "react";
import * as S from "./styles";

export const Resumo = (props) => {
  return (
    <S.Cont {...props}>
      <S.Wrapper>
        <h1>Resu<span>mo</span></h1>
        <div>
          <h2>Educa<span>ção</span></h2>
          <S.Box>
            <S.BoXDescription>
              <div>
                <p>2021</p>
                <p>Fevereiro</p>
              </div>
            </S.BoXDescription>
            <S.BoxParagraph>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá.Detraxit consequat et quo num tendi
                nada.Sapien in monti palavris qui num significa nadis i pareci
                latim.Mé faiz elementum girarzis, nisi eros vermeio.
              </p>
            </S.BoxParagraph>
          </S.Box>
          <S.Box>
            <S.BoXDescription>
              <div>
                <p>2021</p>
                <p>Agosto</p>
              </div>
            </S.BoXDescription>
            <S.BoxParagraph>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá.Detraxit consequat et quo num tendi
                nada.Sapien in monti palavris qui num significa nadis i pareci
                latim.Mé faiz elementum girarzis, nisi eros vermeio.
              </p>
            </S.BoxParagraph>
          </S.Box>
        </div>
        <h1>Experien<span>cia</span></h1>
        <S.BoxEx>
          <ul>
            <li>Desenvolver telas responsivas</li>
            <li>Trabalho em conjunto com os desenvolvedores back-end</li>
            <li>Metodologia ágil Scrum</li>
            <li>Versionamento de código Git</li>
            <li>Frameworks: React JS, Gatsby </li>
          </ul>
        </S.BoxEx>
      <h1>Habilida<span>des</span> Profissiona<span>is</span></h1>
      <S.BoxEx>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>GatsBy</li>
            <li>GraphCMS</li>
          </ul>
        </S.BoxEx>
      </S.Wrapper>
    </S.Cont>
  );
};
