import { gameState } from "../App";

export default function EndScreen({ restart = () => { } }) {
    if (gameState != (1 || 2)) {
        return null;
    } else {
        return (
            <ul className="ulStyle">
                <button type="button" className="button" onClick={restart}>
                    Restart
                </button>
            </ul>
        );
    }
}
