import React, { useReducer, useState } from "react";

import "./styles.css";
import Header from "./components/Header/Header";
import Main from "./assets/main/Main";

const secretNumber = Math.floor(Math.random() * 20 + 1);
const initialState = {
  guess: "",
  message: "⛔ Start guessing...",
  score: 20,
  highscore: 0,
  background: null,
  width: "15rem",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "guessControlled":
      return { ...state, guess: action.payload };
    case "correctNumber":
      return {
        ...state,
        message: action.payload,
        highscore:
          state.score > state.highscore ? state.score : state.highscore,
        width: "30rem",
        background: "#60b347",
      };

    case "tooHigh":
      return { ...state, message: action.payload };
    case "tooLow":
      return { ...state, message: action.payload };
    case "wrongGuess":
      return { ...state, score: action.payload };
    case "gameover":
      return { ...state, message: action.payload, score: 0 };
    case "reset":
      return {
        ...state,
        score: 20,
        message: "⛔ Start guessing...",
        highscore: state.highscore,
        guess: action.payload,
        width: "15rem",
        background: "#222",
      };

    default:
      throw new Error("unknown action type");
  }
};
function App() {
  const [{ guess, message, score, highscore, width, background }, dispatch] =
    useReducer(reducer, initialState);

  function handleChangeGuess(e) {
    dispatch({
      type: "guessControlled",
      payload: Number(e.target.value),
    });
  }

  function handleSubmitGuess(e) {
    e.preventDefault();
    if (!guess) return;

    if (guess === secretNumber) {
      dispatch({ type: "correctNumber", payload: "🎉 Correct Number!" });
    } else if (guess > secretNumber) {
      if (score > 1) {
        dispatch({ type: "wrongGuess", payload: score - 1 });
        dispatch({ type: "tooHigh", payload: "📈 Too high!" });
      } else {
        dispatch({ type: "gameover", payload: "💥 You just lost the game" });
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        dispatch({ type: "wrongGuess", payload: score - 1 });
        dispatch({ type: "tooLow", payload: "📉 Too low!" });
      } else {
        dispatch({ type: "gameover", payload: "💥 You just lost the game" });
      }
    }
  }

  function handleReset(e) {
    dispatch({ type: "reset", payload: Number(e.target.value) });
  }
  return (
    <div style={{ backgroundColor: background }}>
      <Header secretNumber={secretNumber} onReset={handleReset} width={width} />
      <Main
        guess={guess}
        message={message}
        score={score}
        highscore={highscore}
        onChangeGuess={handleChangeGuess}
        onSubmitGuess={handleSubmitGuess}
      />
    </div>
  );
}

export default App;
