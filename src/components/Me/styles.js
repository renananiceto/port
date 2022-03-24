import styled from "styled-components";

export const Container = styled.div`
  background-color: #444;
  -webkit-box-shadow: 11px 0px 13px -4px rgba(0, 0, 0, 0.62);
  box-shadow: 11px 0px 13px -4px rgba(0, 0, 0, 0.62);
  min-height: 100vh;
  min-width: 20%;
`;
export const Wrapper = styled.div`
  padding: 7rem 0rem;
`;

export const BoxRedes = styled.div`
  color: #ffff;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: #ffff;
  }

  div {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;
    :hover {
      background-color: #555;
    }
  }
  svg {
    width: 2rem;
  }
`;

export const BoxFigure = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 150px;
    border-radius: 50%;
  }
`;

export const BoxName = styled.div`
  color: #ffff;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
