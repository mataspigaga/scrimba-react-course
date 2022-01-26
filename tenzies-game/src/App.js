import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    return Array(10)
      .fill()
      .map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((value) => (
    <Die value={value} key={Math.random()} />
  ));

  console.log(dice);

  return (
    <div className="app__container">
      <header>
        <h1>Tenzies</h1>
        <h2>
          Roll until all dice are the same. Press each die to freeze it at its
          current value between rolls.
        </h2>
      </header>
      <div className="dice">{diceElements}</div>
      <button>Roll</button>
    </div>
  );
}

export default App;
