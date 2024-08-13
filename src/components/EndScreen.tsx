import { gameState } from "../App";
import { answer } from "../App";

export default function EndScreen({ restart = () => { } }) {
    if (gameState != (1 || 2)) {
        return null;
    } else {
        return (
            <div className="endScreen">
                <div className="endText">Game Over</div>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <img className="endImage" src={answer.image} alt={answer.name}></img>
                    <button type="button" className="button" onClick={restart}>Restart</button>
                </div>
            </div>
        );
    }
}
