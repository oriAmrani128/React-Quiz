import React from "react";

export default function Finish({ points, maxPoints, highScore, dispatch }) {
  const precentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(precentage)}%)
      </p>
      <p className="highscore">( Highscore : {highScore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </>
  );
}
