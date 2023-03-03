import React from "react";

const WinnerMsg = ({ endGame, winner, handleClose }) => {
  const endMsg = endGame ? "d-block" : "d-none";
  return (
    <>
      <div className={`msg text-center ${endMsg}`}>
        <div className="text-center position-absolute top-0 end-0">
          <button onClick={handleClose} className="btn btn-danger">
            close
          </button>
        </div>
        <img src="images/winner.gif" alt="winner" className="img-fluid w-100" />
        <h3 className="pt-4">
          Player {winner === "p1" ? "One" : "Two"} is winner
        </h3>
      </div>
    </>
  );
};

export default WinnerMsg;
