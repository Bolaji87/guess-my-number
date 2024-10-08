import React from "react";

export default function Header() {
  const randomNum = Math.floor(Math.random() * 6 + 1);

  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again">Again!</button>
      <div className="number">{randomNum}</div>
    </header>
  );
}
