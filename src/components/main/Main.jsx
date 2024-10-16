import { useGuess } from "../../hooks/useGuess";

export default function Main() {
  const { guess, message, score, highscore, onChangeGuess, onSubmitGuess } =
    useGuess();
  return (
    <main>
      <form className="left">
        <input
          value={guess}
          onChange={onChangeGuess}
          type="number"
          className="guess"
        />
        <button className="btn check" onClick={onSubmitGuess}>
          Check!
        </button>
      </form>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
  );
}
