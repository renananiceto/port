import React, {useEffect} from 'react'
import { createGlobalStyle } from 'styled-components';
import Me from "../Me"
import Menu from "../Menu"
import AOS from 'aos'
import "aos/dist/aos.css";

//styles
import * as S from "./styles"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Source Sans 3', sans-serif;
  }
`;

export const Layout = ({children}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 600,
    });
  }, [])

  return (
    <S.Container>
      <GlobalStyle/>
      <Menu/>
      <Me/>
       {React.cloneElement(children, {"data-aos":"zoom-out"})}
    </S.Container>
  )
}
