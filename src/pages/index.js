import * as React from "react";

import { Layout } from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div
        style={{
          width: "77%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFF",
          minHeight:"100vh"
        }}
      >
        <h1 style={{ fontSize: "60px", lineHeight: "74px" }}>Renan Aniceto</h1>
        <p style={{ fontSize: "21px", color: "#aaa", margin: "5px 0" }}>
          Dev Front-end
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
