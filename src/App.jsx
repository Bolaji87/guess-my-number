import React, { useReducer, useState } from "react";

import "./styles.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";

import { useGuess } from "./hooks/useGuess";

function App() {
  const { background } = useGuess();
  return (
    <div style={{ backgroundColor: background }}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
