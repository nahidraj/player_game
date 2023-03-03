import { useState } from "react";
import PlayerBtn from "./PlayerBtn";
import ResetBtn from "./ResetBtn";
import WinnerMsg from "./WinnerMsg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [winningScore, setWinningScore] = useState(0);
  const [inputErrorMsg, setInputErrorMsg] = useState("");
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isP1Disabled, setIsP1Disabled] = useState(true);
  const [isP2Disabled, setIsP2Disabled] = useState(true);

  const inputBorder = inputErrorMsg ? "border-danger" : "";

  // handle form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setInputErrorMsg("Please give me a Number");
    } else if (isNaN(inputValue)) {
      setInputErrorMsg("Only Number are Allowed");
    } else {
      setWinningScore(Number(inputValue));
      setIsP1Disabled(false);
      setIsP2Disabled(true);
      // reseting player point
      setP1Score(0);
      setP2Score(0);
      setEndGame(false);
      setWinner(null);
    }
    setInputValue("");
  };

  // handle input function
  const handleInput = (e) => {
    setInputValue(e.target.value);
    setInputErrorMsg("");
  };

  // player one function
  const handlep1 = () => {
    const score = p1Score + 1;
    setIsP1Disabled(true);
    setIsP2Disabled(false);
    if (p1Score < winningScore) {
      setP1Score(score);
    }
    if (score === winningScore) {
      setEndGame(true);
      setIsP1Disabled(true);
      setIsP2Disabled(true);
      setWinner("p1");
    }
  };

  // player two function
  const handlep2 = () => {
    const score = p2Score + 1;
    setIsP2Disabled(true);
    setIsP1Disabled(false);

    if (p2Score < winningScore) {
      setP2Score(p2Score + 1);
    }
    if (score === winningScore) {
      setEndGame(true);
      setIsP1Disabled(true);
      setIsP2Disabled(true);
      setWinner("p2");
    }
  };

  // close winner msg
  const handleClose = () => {
    setEndGame(false);
    setWinner(null);
  };

  // reset function
  const handleReset = () => {
    setInputValue("");
    setWinningScore("");
    setP1Score(0);
    setP2Score(0);
    setEndGame(false);
    setWinner(null);
    setIsP1Disabled(true);
    setIsP2Disabled(true);
  };

  return (
    <>
      <WinnerMsg endGame={endGame} winner={winner} handleClose={handleClose} />
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="box text-center">
          <h1 className="mb-4">Player Vs Player</h1>
          <h4 className="mb-3">
            Winning Score: {winningScore ? <span>{winningScore}</span> : 0}
          </h4>
          <h5 className="mb-2">
            Player-1: <span>{p1Score}</span>
          </h5>
          <h5 className="mb-4">
            Player-2: <span>{p2Score}</span>
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="inputs d-flex">
              <input
                onChange={handleInput}
                value={inputValue}
                placeholder="Insert number..."
                type="text"
                className={`form-control shadow-none ${inputBorder}`}
              />
              <button className="ms-3 submit">Submit</button>
            </div>
          </form>
          {inputErrorMsg && (
            <span className="text-danger text-start d-block">
              {inputErrorMsg}
            </span>
          )}
          <PlayerBtn
            handlep1={handlep1}
            handlep2={handlep2}
            endGame={endGame}
            isP1Disabled={isP1Disabled}
            isP2Disabled={isP2Disabled}
          />
          <ResetBtn handleReset={handleReset} />
        </div>
      </div>
    </>
  );
}

export default App;
