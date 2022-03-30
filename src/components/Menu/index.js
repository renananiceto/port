import React from "react";

// Styles
import * as S from "./styles";

//Component

//Icons
import { Home } from "@styled-icons/boxicons-regular/Home";
import { User } from "@styled-icons/boxicons-regular/User";
import { GraduationCap } from "@styled-icons/entypo/GraduationCap";
import { WorkOutline } from "@styled-icons/material/WorkOutline";
import { BookAlt } from "@styled-icons/boxicons-regular/BookAlt";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";

export default function index() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.List>
          <S.ListItem>
            <S.A to="/">
              <Home />
              Home
            </S.A>
          </S.ListItem>
          <S.ListItem>
            <S.A to="/about">
              <User />
              About Me
            </S.A>
          </S.ListItem>
          <S.ListItem>
            <S.A to="/resumo">
              <GraduationCap />
              Resume
            </S.A>
          </S.ListItem>
          <S.ListItem>
            <S.A to="/teste">
              <WorkOutline />
              Portifolio
            </S.A>
          </S.ListItem>
          <S.ListItem>
            <S.A to="/">
              <BookAlt />
              Blog
            </S.A>
          </S.ListItem>
          <S.ListItem>
            <S.A to="/">
              <EmailOutline />
              Contact
            </S.A>
          </S.ListItem>
        </S.List>
      </S.Wrapper>
    </S.Container>
  );
}
