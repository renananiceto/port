import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.primary ? "red" : "blue")};
`;

export const FlipContainer = styled.div`
  width: 350px;
  perspective: 1000px;
  border: solid 1rem;
`;
export const Flipper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;

  :hover {
    transform: rotateY(180deg);
  }
`;
export const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
  img {
    width: 350px;
  }
`;
export const Back = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  img {
    width: 350px;
  }
`;
