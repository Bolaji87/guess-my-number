export default function Header({ secretNumber, width, onReset }) {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button onClick={onReset} className="btn again">
        Again!
      </button>
      <div style={{ width: width }} className="number">
        {secretNumber}
      </div>
    </header>
  );
}
