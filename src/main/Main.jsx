import React, { useState } from "react";

export default function Main() {
  const [inputNum, setInputNum] = useState("");
  return (
    <main>
      <form className="left">
        <input
          value={inputNum}
          onChange={(e) => setInputNum(Number(e.target.value))}
          type="number"
          className="guess"
        />
        <button className="btn check">Check!</button>
      </form>
      <section className="right">
        <p className="message">Start guessing...</p>
        <p className="label-score">
          💯 Score: <span className="score">20</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">0</span>
        </p>
      </section>
    </main>
  );
}
