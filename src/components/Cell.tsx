import { answer, gameState } from "../App"
import Abno from "../Abno";

// 0: Name
// 1: Risk Level
// 2: Qliphoth Counter: -1 = X
// 3: Max Enkephalin: -1 = X
// 4: Capable of Breach
// 5: Image path to abnormality portrait
function Cell(abno: Abno, index: number) {
  let element = <></>;
  let content = <></>;

  const cellType = () => {
    if (gameState === 1 && abno.name == answer.name) {
      if (index === 1) return "cell cellName"
      return "cell"
    }
    if (index === 1) return (abno.name === answer.name) ? "cellName correct" : "cellName incorrect";
    if (index === 2 && abno.riskLevel === answer.riskLevel) return "correct";
    if (index === 3 && abno.qliphothCounter === answer.qliphothCounter) return "correct";
    if (index === 4 && abno.maxEnkephalin === answer.maxEnkephalin) return "correct";
    if (index === 5 && abno.canBreach === answer.canBreach) return "correct";
    return "incorrect";
  }

  const textType = () => {
    if (gameState === 1 && abno.name == answer.name) return "cellText labelText"
    return "cellText"
  }

  const text = () => {
    if (index === 1) return abno.name;
    if (index === 2) return abno.riskLevel;
    if (index === 3) return (abno.qliphothCounter == -1) ? "X" : abno.qliphothCounter;
    if (index === 4) return (abno.maxEnkephalin == -1) ? "X" : abno.maxEnkephalin;
    if (index === 5) return abno.canBreach ? "Yes" : "No";
    return "Error";
  }

  const contentType = () => {
    if (index === 3) {
      if (answer.qliphothCounter > abno.qliphothCounter) {
        content = <div className="arrow upArrow">
          <div className={textType()}>{text()}</div>
        </div>
        return
      } else if (answer.qliphothCounter < abno.qliphothCounter) {
        content = <div className="arrow downArrow">
          <div className={textType()}>{text()}</div>
        </div>
        return
      }
    }
    if (index === 4) {
      if (answer.maxEnkephalin > abno.maxEnkephalin) {
        content = <div className="arrow upArrow">
          <div className={textType()}>{text()}</div>
        </div>
        return
      } else if (answer.maxEnkephalin < abno.maxEnkephalin) {
        content = <div className="arrow downArrow">
          <div className={textType()}>{text()}</div>
        </div>
        return
      }
    }
    content = <div className={textType()}>{text()}</div>
  }

  switch (index) {
    case 0: // Image cell
      element = <img className="cell" src={abno.image} alt={abno.name} />;
      break;
    case 1: // Name cell
    case 2: // Risk level cell
    case 3: // Qlipoth cell
    case 4: // Max Enkephalin cell
    case 5: // Breach cell
      contentType();
      element = <div className={"cell " + cellType()}>{content}</div>;
      break;
  }
  return (
    <li className="listElement">
      {element}
    </li>
  );
}

export default Cell;
