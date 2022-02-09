import { useEffect, useState } from "react";
import Die from "./components/Die";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice);
  const [count, setCount] = useState(0);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]);

  // generates 10 random dice between 1-6 in value inclusive
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    return Array(10)
      .fill()
      .map(() => generateNewDie());
  }

  function rollHandler(event) {
    event.preventDefault();
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
    setCount(count + 1);
  }

  function playAgainHandler() {
    window.location.reload();
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div className="app__container">
      {tenzies && <Confetti />}
      {!tenzies ? (
        <Header />
      ) : (
        <header>
          <h1>You Won!</h1>
          <h2>
            Thanks for playing, see what else I'm working on at{" "}
            <a href="https://matas.io">matas.io</a>
          </h2>
        </header>
      )}
      <h3 className="counter">Score: {count}</h3>
      <div className="dice">{diceElements}</div>
      <button onClick={!tenzies ? rollHandler : playAgainHandler}>
        {!tenzies ? "Roll" : "New Game"}
      </button>
    </div>
  );
}

export default App;
