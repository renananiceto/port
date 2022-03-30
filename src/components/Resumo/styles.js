import styled from "styled-components";

export const Cont = styled.div`
  width: 100%;
  color: #fff;
  p {
    color: #b9b9b9;
    font-size: 19px;
  }
  li {
    color: #b9b9b9;
    font-size: 19px;
  }
  ul {
    padding: 1rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 4rem auto;
  h1 {
    :after {
      content: "";
      z-index: 0;
      position: relative;
      left: 6rem;
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
      z-index: 0;
      position: relative;
      left: 6rem;
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

export const BoXDescription = styled.div`
  text-align: right;
  min-width: 12%;
  border-right: solid 1px #949494;
  padding-right: 15px;
  padding-bottom: 2rem;
  line-height: 2rem;
`;

export const Box = styled.div`
  display: flex;
`;

export const BoxParagraph = styled.div`
  padding-left: 15px;
`;

export const BoxEx = styled.div`
  line-height: 2rem;
  padding-left: 12rem;
`;
