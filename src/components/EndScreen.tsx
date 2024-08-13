import { gameState } from "../App";
import { answer } from "../App";

export default function EndScreen({ restart = () => { } }) {
    const text = () => {
        return (gameState === 1) ? "Game Over" : "You Won";
    }

    if (gameState == 0) {
        return null;
    } else {
        return (
            <div className="endScreen">
                <div className="endText">{text()}</div>
                <div style={{ display: "flex" }}>
                    <img className="endImage" src={answer.image} alt={answer.name}></img>
                    <button type="button" className="button" onClick={restart}>Restart</button>
                </div>
            </div>
        );
    }
}
