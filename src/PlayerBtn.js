import React from "react";

const PlayerBtn = ({ handlep1, handlep2, isP1Disabled, isP2Disabled }) => {
  return (
    <>
      <div className="plr-btn">
        <button
          disabled={isP1Disabled}
          onClick={handlep1}
          className={`${isP1Disabled ? "btn-disabled" : "btn-success"}`}
        >
          Player 1
        </button>
        <button
          disabled={isP2Disabled}
          onClick={handlep2}
          className={`ms-3 ${isP2Disabled ? "btn-disabled" : "btn-success"}`}
        >
          Player 2
        </button>
      </div>
    </>
  );
};

export default PlayerBtn;
