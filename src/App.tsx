/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

import background3 from "./img/background3.jpg";

const App: React.FC = () => {
  return (
    <div
      className="App"
      css={css`
        background: url(${background3});
        background-size: cover;
        height: 100vh;

        .flex-section {
          display: flex;
        }
      `}
    >
      <Navbar />
      <Section />
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap");

          * {
            font-family: "Teko", sans-serif;
            margin: 0;
            padding: 0;
          }

          body {
            background: #000;
          }
        `}
      />
    </div>
  );
};

export default App;
