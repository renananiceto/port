import styled from "styled-components";
import {Link} from "gatsby"

export const Container = styled.div`
  background-color: #222;
  color: #fff;
  min-height: 100vh;
  :hover {
    color: #04b4e0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const List = styled.ul`
  list-style: none;
  min-height: 100vh;
  box-shadow: 0 0 30px -5px rgb(0 0 0 / 15%);
  background-color: #444;
  width: 5rem;
  border: solid #222 1px;
`;
export const ListItem = styled.li`
  background-color: #444;
  border-bottom: solid #222 1px;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  svg {
    width: 3rem;
    padding-bottom: 10px;
  }
`;

export const A = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    color: #04b4e0;
  }
`;
