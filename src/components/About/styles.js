import styled from "styled-components";
import { Computer } from '@styled-icons/material-rounded/Computer'


export const Cont = styled.div`
  width: 100%;
  color: #fff;
  p {
    color: #b9b9b9;
    font-size: 19px;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 4rem auto;
  h1 {
    :after {
      content: "";
      position: relative;
      left: 8rem;
      bottom: 16px;
      display: flex;
      background-image: radial-gradient(#04b4e0 5%, #f8f8f800 20%);
      background-position: 0 0;
      background-repeat: repeat;
      background-size: 8px 7px;
      width: 50px;
      height: 20px;
    }
  }
  h2 {
    padding: 4rem 0 1rem 0rem;
    :after {
      content: "";
      position: relative;
      left: 8rem;
      bottom: 16px;
      display: flex;
      background-image: radial-gradient(#04b4e0 5%, #f8f8f800 20%);
      background-position: 0 0;
      background-repeat: repeat;
      background-size: 8px 7px;
      width: 50px;
      height: 20px;
    }
  }
  span {
    color: #04b4e0;
  }
`;
export const BoxAddress = styled.div`
  display: flex;
  padding-top: 0.8rem;
`;

export const Sobre = styled.div`
  width: 65%;
  padding-right: 4rem;
  line-height: 2rem;
`;

export const Address = styled.section`
  line-height: 2rem;
`;

export const Cpt = styled(Computer)`
  width: 60px;
  padding: 1rem 0;
  color: #04b4e0;
`
export const Paragraph = styled.p`
font-size: 30px;
font-weight: bolder;
color: #FFF !important;
`