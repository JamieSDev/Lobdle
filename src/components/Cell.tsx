import { answer } from "../App"
import Abno from "../Abno";

// 0: Name
// 1: Risk Level
// 2: Qliphoth Counter: -1 = X
// 3: Max Enkephalin
// 4: Capable of Breach
// 5: Image path to abnormality portrait
function Cell(abno: Abno, index: number) {
  let element = <></>;

  const cellType = () => {
    if (index === 1) return (abno.name === answer.name) ? "cellName correct" : "cellName incorrect";
    if (index === 2 && abno.riskLevel === answer.riskLevel) return "correct";
    if (index === 3 && abno.qliphothCounter === answer.qliphothCounter) return "correct";
    if (index === 4 && abno.maxEnkephalin === answer.maxEnkephalin) return "correct";
    if (index === 5 && abno.canBreach === answer.canBreach) return "correct";
    return "incorrect";
  }

  const text = () => {
    if (index === 1) return abno.name;
    if (index === 2) return abno.riskLevel;
    if (index === 3) return (abno.qliphothCounter == -1) ? "X" : abno.qliphothCounter;
    if (index === 4) return abno.maxEnkephalin;
    if (index === 5) return abno.canBreach ? "Yes" : "No";
    return "Error";
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
      element =
        <div className={"cell " + cellType()}>
          <div className="cellText">{text()}</div>
        </div>;
      break;
  }
  return (
    <li className="listElement">
      {element}
    </li>
  );
}

export default Cell;
