import React from 'react'

const ResetBtn = ({ handleReset }) => {
  return (
    <>
      <div className="reset">
        <button onClick={handleReset} className="resets">
          Reset
        </button>
      </div>
    </>
  );
};

export default ResetBtn