import * as React from "react";
import { createGlobalStyle } from "styled-components";

import Menu from "../components/Menu";
import Me from "../components/Me";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Source Sans 3', sans-serif;
  }
`;

// markup
const IndexPage = () => {
  return (
    <main style={{ display: "flex", backgroundColor: "#222", width: "100%" }}>
      <GlobalStyle />
      <Menu />
      <Me />
      <div
        style={{
          width: "77%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFF",
        }}
      >
        <h1 style={{ fontSize: "60px", lineHeight: "74px" }}>Renan Aniceto</h1>
        <p style={{ fontSize: "21px", color: "#aaa", margin: "5px 0" }}>
          Dev Front-end
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
