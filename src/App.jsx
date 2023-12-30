import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import Confetti from "react-confetti";

function App() {
  const [tenzies, setTenzies] = useState(false);
  const [diceArray, setDiceArray] = useState(allNewDice());

  useEffect(() => {
    const allHeld = diceArray.every((die) => die.isHeld);
    const firstValue = diceArray[0].value;
    const allSameValue = diceArray.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [diceArray]);

  function allNewDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  }

  function rollDice() {
    if (!tenzies) {
      setDiceArray((oldArray) =>
        oldArray.map((die) =>
          die.isHeld === true
            ? die
            : {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
              }
        )
      );
    } else {
      setTenzies(false)
      setDiceArray(allNewDice())
    }
  }
  function holdDie(currentId) {
    setDiceArray((prev) =>
      prev.map((die) =>
        die.id === currentId ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {diceArray.map((die) => (
          <Die key={die.id} die={die} holdDie={() => holdDie(die.id)} />
        ))}
      </div>
      <button className="roll-dicebtn" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
