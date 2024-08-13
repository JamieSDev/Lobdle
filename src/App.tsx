import ComboBox from "./components/ComboBox";
import { useState } from "react";
import Abno from "./Abno";
import Cell from "./components/Cell";
import EndScreen from "./components/EndScreen";
import { abnoNameList } from "./AbnoData";

let answer: Abno;
let attemptList: Abno[] = [];
let cellMaker: number[] = [0, 1, 2, 3, 4, 5];
let gameState: number = 0; //0: ongoing, 1: lost, 2: won


function addAttempt(index: number) {
  attemptList.unshift(new Abno(index));
};

function App() {
  const [guesses, setGuesses] = useState(0);
  const [initialization, setInitialization] = useState(0);

  if (initialization == 0) {
    answer = new Abno();
    setInitialization(1);
  };

  const handleGuess = (i: number) => {
    addAttempt(i);
    setGuesses(guesses + 1);
  };

  const restart = () => {
    setGuesses(0);
    setInitialization(0);
    attemptList = [];
    gameState = 0;
  };

  if (attemptList.length > 0) {
    if (attemptList[0].name == answer.name) {
      gameState = 2;
    } else if (guesses == 5) {
      gameState = 1;
      addAttempt(abnoNameList.indexOf(answer.name));
    }
  }

  return (
    <>
      <img className="logo" src="Lobdle Logo.webp" alt="Lobdle"></img>
      <EndScreen restart={restart} />
      <ComboBox handleGuess={handleGuess} />
      <ul className="ulStyle attemptLabels">
        <li className="cell attemptLabelElement">
          <div className="cellText labelText">Image</div>
        </li>
        <li className="cell cellName attemptLabelElement">
          <div className="cellText labelText">Name</div>
        </li>
        <li className="cell attemptLabelElement">
          <div className="cellText labelText">Risk level</div>
        </li>
        <li className="cell attemptLabelElement">
          <div className="cellText labelText">Qliphoth counter</div>
        </li>
        <li className="cell attemptLabelElement">
          <div className="cellText labelText">Max Enkephalin</div>
        </li>
        <li className="cell attemptLabelElement">
          <div className="cellText labelText">Breaching</div>
        </li>
      </ul>
      {attemptList.map((abno) => <ul className="ulStyle">{cellMaker.map((index) => Cell(abno, index))}</ul>)}
    </>
  );
}

export { answer, gameState };
export default App;
