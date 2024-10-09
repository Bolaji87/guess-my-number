import React, { useReducer, useState } from "react";

import "./styles.css";
import Header from "./Header/Header";
import Main from "./main/Main";

const secretNumber = Math.floor(Math.random() * 20 + 1);
const initialState = {
  guess: "",
  message: "⛔ Start guessing...",
  score: 20,
  highscore: 0,
};
const reducer = () => {};
function App() {
  const [{ guess, message, score, highscore }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [guess, setGuess] = useState("");
  // const [message, setMessage] = useState("⛔ Start guessing...");
  // const [score, setScore] = useState(20);
  // const [highscore, setHighscore] = useState(0);
  // const [background, setBackground] = useState("#222");
  // const [width, setWidth] = useState("15rem");

  // const handleChangeGuess = (e) => {
  //   setGuess(Number(e.target.value));
  // };

  // function handleClick(e) {
  //   e.preventDefault();
  //   if (!guess) return;
  //   if (guess === secretNumber) {
  //     setMessage("🎉 Correct number!");
  //     setHighscore(score);
  //     document.querySelector("body").style = setBackground("#60b347");
  //     setWidth("30rem");
  //     setGuess("");
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       setMessage("📈 Too high!");
  //       setScore((score) => score - 1);
  //     } else {
  //       setMessage("💥 You just lost the game!");
  //       setScore(0);
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score < 1) {
  //       setMessage("📉 Too low!");
  //       setScore((score) => score - 1);
  //     } else {
  //       setMessage("💥 You just lost the game!");
  //       setScore(0);
  //     }
  //   }
  // }

  // function handleReset() {
  //   setScore(20);
  //   setGuess("");
  //   setMessage("⛔ Start guessing...");
  //   setBackground("#222");
  // }

  return (
    <div style={{}}>
      <Header secretNumber={secretNumber} />
      <Main />
    </div>
  );
}

export default App;
